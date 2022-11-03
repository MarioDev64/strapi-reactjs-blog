import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import {
    Box,
    Flex,
    Stack,
    Text,
    Button,
    Select,
    Spacer,
    Spinner,
    Skeleton
} from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons'
import { BsColumns, BsList } from "react-icons/bs";
import Card from "../../components/Card";
import HorizontalCard from "../../components/Card/HorizontalCard";

const FEEDS = gql`
    query GetFeed {
        feeds {
            data {
                id
                attributes {
                    title
                    body
                    thumbnail {
                        data {
                            id
                            attributes {
                                url
                            }
                        }
                    }
                    createdAt
                    updatedAt
                    publishedAt
                }
            }
        }
    }
`

const QueryFeedsByDefault = (props) => {
    const { loading, error, data } = useQuery(FEEDS);
    
    if(error){
        console.log('QueryFeedsByDefaultError', error);
    };

    if(loading) return <Skeleton />

    if(props.horizontalLayout){
        return (
            <>
                {data?.feeds?.data?.map(feed => (
                    <HorizontalCard key={feed.id} {...feed} />
                ))}
            </>
        )
    }

    return (
        <>
            {data?.feeds?.data?.map(feed => (
                <Card key={feed.id} {...feed} />
            ))}
        </>
    )
}

const FEEDS_BY_ID = gql`
    query GetCategory($id: ID!) {
        category(id: $id) {
            data {
                id
                    attributes {
                    name
                    feeds {
                        data {
                        id
                            attributes {
                                title
                                body
                                thumbnail {
                                    data {
                                      id
                                      attributes {
                                        url
                                      }
                                    }
                                }
                                createdAt
                                updatedAt
                                publishedAt
                            }
                        }
                    }
                }
            }
        }
    }
`

const QueryFeedsById = (props) => {
    const { loading, error, data } = useQuery(FEEDS_BY_ID, {
        variables: { id: props.categorySelected }
    })

    if(error){
        console.log('QueryFeedsByIdError', error);
    };

    if(loading) return <Skeleton />
   
    if(props.horizontalLayout){
        return (
            <>
                {data?.category?.data?.attributes?.feeds?.data?.map(feed => (
                    <HorizontalCard key={feed.id} {...feed} />
                ))}
            </>
        )
    }

    return (
        <>
            {data?.category?.data?.attributes?.feeds?.data?.map(feed => (
                <Card key={feed.id} {...feed} />
            ))}
        </>
    )
}

const CATEGORIES = gql`
    query GetCategory {
        categories {
            data {
                id
                attributes {
                    name
                }
            }
        }
    }
`
const HomePage = () => {
    const { loading, error, data } = useQuery(CATEGORIES);
    const [ categorySelected, setCategorySelected ] = useState(null);
    const [ horizontalLayout, setHorizontalLayout ] = useState(false);

    if(error) return <Text>{error}</Text>
    if(loading) return <Spinner /> 
    
    const handleChange = (event) => {
        event.preventDefault();
        //console.log('handleChange', event.target.value);
        setCategorySelected(event.target.value);
    }

    const handleOnClick = (event) => {
        const viewSetting = event.target.id;
        if(viewSetting === 'cards' && horizontalLayout === false || 
            viewSetting === 'list' && horizontalLayout === true ){
                return;
        }else{
            if(viewSetting === 'list'){
                setHorizontalLayout(true);
            }else{
                setHorizontalLayout(false);
            }
        }  
    }

    return (
        <Box pt="60px">
            <Flex justifyContent="space-around" >
                <Box w="260px" maxH="40px">
                    <Select icon={<TriangleDownIcon />} size="md" onChange={handleChange}>
                        {data?.categories?.data?.map(category => (
                             <option key={category.id} value={category.id}>{category.attributes?.name}</option>
                        ))}
                    </Select>
                </Box>
                <Stack width="120px" maxH="40px">
                    <Flex>
                        <Button id="cards" onClick={handleOnClick}><BsColumns /></Button>
                        <Spacer /> 
                        <Button id="list" onClick={handleOnClick}><BsList /></Button> 
                    </Flex>
                </Stack>
            </Flex>
            <Flex flexWrap="wrap" gap="30px" pt="60px" justifyContent="center" pb={20}>
                { categorySelected ? <QueryFeedsById categorySelected={categorySelected} horizontalLayout={horizontalLayout} /> : <QueryFeedsByDefault horizontalLayout={horizontalLayout} /> }
            </Flex>
        </Box>
    )
}

export default HomePage;
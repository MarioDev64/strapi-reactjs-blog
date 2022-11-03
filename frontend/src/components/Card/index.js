import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import  TimeFromNow from '../../lib/time-from-now';
import setElypsis from '../../lib/setElypsis';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Image
} from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';

const Card = (props) => {
    return (
        <Center>
            <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box
                h={'210px'}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}>
                <Image
                    src={`http://localhost:1337${props?.attributes?.thumbnail?.data?.attributes?.url}`}
                    layout={'fill'}
                />
                </Box>
                <Stack>
                <Heading
                    pt={3}
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize="16px"
                    fontFamily={'body'}>
                    { props?.attributes?.title }
                </Heading>
                <Text fontSize="13px" color={'gray.500'}>
                    <ReactMarkdown components={ChakraUIRenderer()} children={setElypsis(props?.attributes?.body?.substring(0, 100))}  remarkPlugins={[remarkGfm]} />
                </Text>
                </Stack>
                <Stack justifyContent="space-between" mt={6} direction={'row'} spacing={4} align={'center'}>
                <Stack direction={'column'} spacing={0}>
                    <Text color={'gray.500'} fontSize="13px">
                        <TimeIcon /> {TimeFromNow(props?.attributes?.createdAt)}
                    </Text>
                </Stack>
                <Stack direction={'column'} spacing={0} fontSize="13px">
                    <Text color={'gray.500'}>Leer más</Text>
                </Stack>
                </Stack>
            </Box>
        </Center>
    )
}

export default Card;
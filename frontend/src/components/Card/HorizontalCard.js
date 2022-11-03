import React from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import  TimeFromNow from '../../lib/time-from-now';
import setElypsis from '../../lib/setElypsis';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import {
    Box,
    Flex,
    Stack,
    HStack,
    Image,
    Link,
    Text,
    Heading
} from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';

const HorizontalCard = (props) => {
  return (
    <Flex maxH="144px" direction={'row'} boxShadow={'2xl'}>
        <Stack w="100%" direction={'row'}>
            <Box w="224px" overflow="hidden">
                <Image
                    src={`http://localhost:1337${props?.attributes?.thumbnail?.data?.attributes?.url}`}
                    layout={'fill'}
                />  
            </Box>
            <Flex direction={'row'}>
                <Stack justifyContent="space-between" direction={'row'} w="70%">
                    <Stack direction={'column'} alignItems="baseline" justifyContent="center">
                        <Heading as="h5" fontSize="15px" color={'gray.800'}>{ props?.attributes?.title }</Heading>
                        <Text fontSize="13px" color={'gray.500'}>
                            <ReactMarkdown components={ChakraUIRenderer()} children={setElypsis(props?.attributes?.body?.substring(0, 100))}  remarkPlugins={[remarkGfm]} />
                        </Text>
                        <Text fontSize="13px" color={'gray.500'}>
                            <TimeIcon /> {TimeFromNow(props?.attributes?.createdAt)} 
                        </Text>
                    </Stack>
                    <Stack direction={'row'} alignItems="center" justifyContent="center" w="30%">
                        <Text fontSize="13px" color={'gray.500'}> Leer Mas</Text>
                    </Stack>
                </Stack>
            </Flex>
        </Stack>
    </Flex>
  )
}

export default HorizontalCard;
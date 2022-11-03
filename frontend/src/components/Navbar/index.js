import React from 'react'
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <>
      <Box bg={useColorModeValue('white.100', 'white.900')} px="60px" boxShadow='xl' >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box w="220px">
            <Image src={Logo} alt='Logo' />
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Popover>
                <PopoverTrigger>
                  <Button w="180px" bgColor="#222F38" _hover={{
                    background: "#E3216C",
                    color: "white",
                  }}>
                    Iniciar sesión
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Hi there!</PopoverHeader>
                  <PopoverBody>This feature is not ready yet :c</PopoverBody>
                </PopoverContent>
              </Popover>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Navbar
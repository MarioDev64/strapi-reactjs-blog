import React from 'react';
import { ColorModeProvider, LightMode } from "@chakra-ui/react";
import Container from "./Container";
import Navbar from "../Navbar";

const Layout = ({children}) => {
  return (
    <ColorModeProvider>
      <LightMode>
        <Navbar />
        <Container>{children}</Container>
      </LightMode>
    </ColorModeProvider>
  )
}

export default Layout;
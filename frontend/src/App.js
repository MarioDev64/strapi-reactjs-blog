import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Client from './Client/ApolloClient';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
// import theme from "./theme"

/* Pages */
import Home from './pages/Home';

/* Layaouts */
import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <ApolloProvider client={Client}>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
        </ApolloProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;

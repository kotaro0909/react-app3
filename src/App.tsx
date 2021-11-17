import { Button, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
      <p>あああああ</p>
    </ChakraProvider>
  );
}

export default App;

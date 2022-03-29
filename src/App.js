import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TodoList />
    </ChakraProvider>
  );
}

export default App;

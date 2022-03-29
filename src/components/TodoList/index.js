import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  List,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchSelector, todoListFilterSelector } from '../../redux/selectors';
import Search from '../Search';
import TodoItem from '../TodoItem';
import { todoActions } from './todoSlice';

export default function TodoList() {
  const [edit, setEdit] = useState(false);
  const [idEdit, setIdEdit] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const todos = useSelector(todoListFilterSelector);
  const search = useSelector(searchSelector);

  const nameRef = useRef(null);

  const handleEditTodo = todo => {
    setName(todo.name);
    setIdEdit(todo.id);
    setEdit(true);
    nameRef.current.focus();
  };

  const handleDeleteTodo = todo => {
    dispatch(todoActions.deleteTodo(todo.id));
    setName('');
    setEdit(false);
  };

  const handleAddTodo = () => {
    dispatch(
      todoActions.addTodo({ name, id: Date.now().toString(), completed: false })
    );
    setName('');
  };

  const handleUpdateTodo = () => {
    dispatch(todoActions.updateTodo({ id: idEdit, name: name }));
    setName('');
    setEdit(false);
    nameRef.current.focus();
  };

  return (
    <Flex align="center" justify="center" h="100vh" bg="gray.200">
      <Box
        h="700px"
        w="500px"
        borderRadius={8}
        boxShadow="xl"
        p="6"
        rounded="md"
        bg="white"
        position="relative"
      >
        <Heading textAlign="center">Todo App Redux ToolKit</Heading>

        <Search search={search} />
        <Box w="100%" h="450px" mt="5" overflowY="auto">
          <List spacing={3}>
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleEditTodo={handleEditTodo}
                handleDeleteTodo={handleDeleteTodo}
              />
            ))}
          </List>
        </Box>
        <FormControl
          display="flex"
          position="absolute"
          bottom="10px"
          left="0px"
          p="24px"
        >
          <Input
            ref={nameRef}
            mr="4px"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
          {edit ? (
            <Button
              colorScheme="teal"
              variant="solid"
              onClick={handleUpdateTodo}
            >
              Edit
            </Button>
          ) : (
            <Button colorScheme="teal" variant="solid" onClick={handleAddTodo}>
              Add
            </Button>
          )}
        </FormControl>
      </Box>
    </Flex>
  );
}

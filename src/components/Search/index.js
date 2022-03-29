import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchActions } from './searchSlice';

export default function Search() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  // const search = useSelector(searchSelector);

  const handleSearchChange = e => {
    setSearch(e.target.value);
    dispatch(searchActions.setSearch(e.target.value));
  };

  return (
    <Box w="100%">
      <FormControl>
        <FormLabel htmlFor="search">Search</FormLabel>
        <Input
          id="search"
          placeholder="Search"
          value={search}
          autoComplete="off"
          onChange={e => {
            handleSearchChange(e);
          }}
        />
      </FormControl>
    </Box>
  );
}

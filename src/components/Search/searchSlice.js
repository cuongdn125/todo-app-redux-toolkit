import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchText: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

//Actions
export const searchActions = searchSlice.actions;

//Reducer
const searchReducer = searchSlice.reducer;

export default searchReducer;

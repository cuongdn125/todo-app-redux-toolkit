import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../components/Search/searchSlice';
import todoReducer from '../components/TodoList/todoSlice';
export const store = configureStore({
  reducer: {
    todoList: todoReducer,
    search: searchReducer,
  },
});

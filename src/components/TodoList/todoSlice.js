import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todo: [
    { id: 1, name: 'Learn ReactJs', completed: false },
    { id: 2, name: 'Learn Chakra UI', completed: true },
  ],
};
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todo = state.todo.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            ...action.payload,
          };
        }
        return todo;
      });
    },
  },
});

//Actions
export const todoActions = todoSlice.actions;

//Reducer
const todoReducer = todoSlice.reducer;

export default todoReducer;

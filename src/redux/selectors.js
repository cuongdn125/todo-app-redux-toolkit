import { createSelector } from '@reduxjs/toolkit';

export const todoListSelector = state => state.todoList.todo;

export const searchSelector = state => state.search.searchText;

export const todoListFilterSelector = createSelector(
  todoListSelector,
  searchSelector,
  (todoList, search) => {
    return todoList.filter(todo =>
      todo.name.toLowerCase().includes(search.toLowerCase())
    );
  }
);

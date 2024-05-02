import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      Text: "Hello!keep learning never give up",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todos = {
        id: nanoid(),
        Text: action.payload.Text,
      };
    },
    removeTodo: () => {},
  },
});

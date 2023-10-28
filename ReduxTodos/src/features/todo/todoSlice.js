// slice banau store vanne box lai...
// slice ma 3 ota kura hunxa 1. name 2. initialState 3. reducers
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todo: [{ id: 1, text: "hello word" }],
};

export const todoSlice = createSlice({
  name: "myTodos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todo.push(todo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todo = state.todo.filter((todo) => todo.id !== id);
    },
    updateTodo: (state, action) => {
      const id = action.payload.id;
      const text = action.payload.text;
      state.todo.map((todo) => {
        if (todo.id === id) {
          todo.text = text;
        }
      });
    },
    deleteTodo: (state, action) => {
      const id = action.payload.id;
      state.todo = state.todo.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, removeTodo, updateTodo, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;

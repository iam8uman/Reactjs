import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const idd = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== idd);
    },
    updateTodo: (state, action) => {
      const idd = action.payload.id;
      const text = action.payload.text;
      state.todos.map((todo) => {
        if (todo.id === idd) {
          todo.text = text;
        }
      });
    },
    deleteTodo: (state, action) => {
      const idd = action.payload.id;
      state.todos = state.todos.filter((todo) => todo.id !== idd);
    },
    // Context API ma declare matra gartheu yeha define ne garnu parxa!
    // action consists of payload and type
    // state consists of state of todos
  },
});

export const { addTodo, removeTodo, updateTodo, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;

// important note: we have to export the reducer and their actions indivually and it is syntax 
import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text:"hello World"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo:(state,action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            const idd = action.payload
            state.todos = state.todos.filter((todo)=>todo.id!==idd)
        },
        // Context API ma declare matra gartheu yeha define ne garnu parxa!
    }
})
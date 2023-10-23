import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text:"hello World"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo:(state,action)=>{},
        removeTodo:()=>{},
        // Context API ma declare matra gartheu yeha define ne garnu parxa!
    }
})
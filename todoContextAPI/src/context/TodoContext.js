import React, { useContext } from "react";

 export const TodoContext = React.createContext({
    todos:[
        {
            id:1,
            todo:"Message of TODO",
            completed:false
        }
    ],
    addTodo:(todo)=>{todo},
    updateTodo:(id,todo)=>{id,todo},
    deleteTodo:(id)=>{id},
    toggleComplete:(id)=>{id}
});


export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider;

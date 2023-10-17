import React, { useContext } from "react";

const TodoContext = React.createContext({
    todos:[
        {
            id:1,
            todo:"Message of TODO",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
});

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider;

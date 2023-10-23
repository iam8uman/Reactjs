import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';


export const store = configureStore({
    reducer: todoReducer,
});

//uta ko reucer haru lai yeha import garne ani store ma reducer: reducerName
// store garne yeha ho reducers lai
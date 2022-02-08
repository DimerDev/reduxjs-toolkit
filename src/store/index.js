import { configureStore } from '@reduxjs/toolkit';
import  todoSlice  from './todoSlice';

export default configureStore({
    reducer: {
        todo: todoSlice,     // имя store (todo), в котором лежит Slice - list
    }
});


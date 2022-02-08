import { createSlice, AsyncThunk } from '@reduxjs/toolkit';

const todoSlice = createSlice ({ // create store
    name: 'list',                // name store   
    initialState: [],            //

    reducers: {                 // методы изменения state
        // каждый метод принимает текущий state и action obj
        add(state, actions) {   

        },
        toggleComplete(state, actions) {   

        },
        remove(state, actions) {   //   action.payload = принимаем данные

        },
        //   action:{
        //      payload: принимаем данные переданные при вызове метода,
        //      type: 
        //      }
    },                

    extraReducers: {},          //
});

export const { add, toggleComplete, remove } = todoSlice.actions;  // экпорт методов reducers
export default todoSlice.reducer;     // экпорт Slice
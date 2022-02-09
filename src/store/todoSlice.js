import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodo = createAsyncThunk(   // получаем данные с API 
    'todos/fetchTodo',           //create action (name store/method)
    async function( _, {rejectWithValue}) {          // 1param -  принимает при вызове метода; 2param - rejectWithValue - метод возвращаем в catch
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
            if(!response.ok) {
                throw new Error('Server error');
            }
            const data = await response.json();
            
            return data;
        } catch (error) {
            return rejectWithValue(error.message);   // return - rejectWithValue(передаем в метод ошибку) и обрабатываем в extraReducers - fetchTodo.rejected 
        }
    },
);

export const fetchAddTodo = createAsyncThunk (
    'todos/fetchAddTodo',
    async function(text, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch ('https://jsonplaceholder.typicode.com/todos',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                completed: false,
                id: 1,
                title: text,
                userId: 1
            })
        });

        if(!response.ok) {
            throw new Error('Server error');
        }
        const data = await response.json();
        dispatch(add(data));

        } catch (error) {
            return rejectWithValue(error.message);
        }
        
    }
);

const todoSlice = createSlice ({ // create store
    name: 'todos',                // name store   
    initialState: {
        list: [],
        loading: false,
        error: false,
    },            

    reducers: {                 // методы изменения state
        // каждый метод принимает текущий state и action obj
        add(state, action) {   
            state.list.push(action.payload);
        },
        toggleComplete(state, action) {   

        },
        remove(state, action) {   //   action.payload = принимаем данные

        },
        //   action:{
        //      payload: принимаем данные переданные при вызове метода,
        //      type: 
        //      }
    },                

    extraReducers: {                                // Жизненный цикл Thunk
        [fetchTodo.pending]: (state, action) => {   // loading
            state.loading = !state.loading;
            state.error = false;
        },
        [fetchTodo.fulfilled]: (state, action) => { // получаем данные
            state.error = false;
            state.loading = !state.loading;
            state.list = action.payload;            // запись в state полученных данных с API 
        },
        [fetchTodo.rejected]: (state, action) => { // Error
            state.error = action.payload;
            state.loading = !state.loading;
        },
    },          
});

export const { add, toggleComplete, remove } = todoSlice.actions;  // экпорт методов reducers
export default todoSlice.reducer;     // экпорт Slice
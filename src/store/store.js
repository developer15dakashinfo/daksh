import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for managing page content
const contentSlice = createSlice({
    name: 'content',
    initialState: {
        title: '',
        content: '',
    },
    reducers: {
        setContent: (state, action) => {
            state.title = action.payload.title;
            state.content = action.payload.content;
        },
    },
});

export const { setContent } = contentSlice.actions;

// Configure the store
const store = configureStore({
    reducer: {
        content: contentSlice.reducer,
    },
});

export default store;

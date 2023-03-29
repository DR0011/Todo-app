import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: []
    },
    reducers: {
        addtodo(state, action) {

            state.items.push(action.payload);
        },
        editTodo: (state, action) => {
            const { id, title, description } = action.payload;
            const todo = state.items.find((item) => item.id === id);
            if (todo) {
                todo.title = title;
                todo.description = description;
            }
        },
        deleteTodo: (state, action) => {
            const { id } = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
        },


    },
});

export const { addtodo, editTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;

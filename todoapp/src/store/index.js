import { configureStore } from '@reduxjs/toolkit'
import todosreducer from './TodosSlice'

export const store = configureStore({
    reducer: {
        todos: todosreducer,
    },

})
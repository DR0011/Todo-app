import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    UPDATE_TODO,

} from "./actionTypes";

export const addNewTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: {
            id: Date.now(),
            title: todo?.title,
            description: todo?.description,
        },
    };
};
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id,
    };
};
export const editTodo = (id) => {
    return {
        type: EDIT_TODO,
        payload: {
            id: id,
        },
        isEdit: true,
    };
};

export const updateTodo = (id, todo) => {
    return {
        type: UPDATE_TODO,
        payload: {
            todoId: id,
            todoTitle: todo?.title,
            todoDescription: todo?.description,
        },
    };
};


import {
    ADD_TODO,
    DELETE_TODO,
    CLEAR_ALL_TODO,
    EDIT_TODO,
    UPDATE_TODO,

} from "../actions/actionTypes";

const initialState = {
    todos: [

    ],
    isEdit: false,
    editTodoId: "",
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const { id, title, description } = action.payload;
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: id,
                        title: title,
                        description: description,

                    },
                ],
                isEdit: action.isEdit,
            };
        case DELETE_TODO:
            const newTodoList = state.todos.filter((item) => item.id !== action.id);
            return {
                ...state,
                todos: newTodoList,
            };

        case EDIT_TODO:
            const editTodo = action.payload;
            let newEditTodo = state?.todos?.find((item) => item?.id === editTodo?.id);
            return {
                ...state,
                isEdit: action.isEdit,
                editTodo: newEditTodo,
            };

        case UPDATE_TODO:
            const { todoId, todoTitle, todoDescription } = action.payload;
            const todos = state.todos.filter((todo) => {
                return todo.id !== todoId;
            });

            const todo = state.todos.find((todo) => todo?.id === todoId);
            todo.title = todoTitle;
            todo.description = todoDescription;

            todos.push(todo);

            return {
                ...state,
                todos: [...todos],
                isEdit: false,
            };



        case CLEAR_ALL_TODO:
            return {
                ...state,
                todos: [],
            };

        default:
            return state;
    }
};
export default todoReducer;
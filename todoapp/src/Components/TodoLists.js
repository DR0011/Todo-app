import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../redux/actions";



export const TodoLists = () => {
    const todos = useSelector((state) => state.todoReducer.todos);
    const dispatch = useDispatch();


    const actionClick = (data) => {
        if (data && data?.type === "edit") {
            dispatch(editTodo(data?.todo?.id));
        } else if (data && data?.type === "delete") {
            dispatch(deleteTodo(data?.todo?.id));
        }
    };



    return (
        <div className="container my-2">
            <div className="row pb-4" style={{ height: "60px" }}>
                <div className="col-xl-12 text-right">

                </div>
            </div>

            <table className="table table-bordered">
                <thead>
                    <tr>

                        <th width="30%">Name</th>
                        <th width="42%">Description</th>

                        <th width="10%">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {todos && todos.map((todo, index) => (
                        <tr key={index}>

                            <td>{todo?.title}</td>
                            <td>{todo?.description}</td>

                            <td>
                                <button
                                    className="btn btn-primary btn-sm"
                                    onClick={() => actionClick({ todo: todo, type: "edit" })}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger btn-sm ml-1"
                                    onClick={() => actionClick({ todo: todo, type: "delete" })}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table >
        </div >
    );
};
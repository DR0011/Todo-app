import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, editTodo, deleteTodo } from '../store/TodosSlice'


export const AddTodo = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const todos = useSelector((state) => state.todos.items)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addtodo({ id: todos.length + 1, title, description }))
        setTitle("");
        setDescription("")
    }

    return (
        <div className="container my-4 py-1 border">
            <form className="mt-3 mb-2" id="todoForm" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-xl-3">
                        <label className="sr-only">Name</label>
                        <input
                            type="text"
                            value={title}
                            className="form-control mb-2 mr-sm-3"
                            placeholder="Todo Title"
                            onChange={(e) => setTitle(e.target.value)}
                        />

                    </div>

                    <div className="col-xl-3">
                        <label className="sr-only">Description</label>
                        <input
                            type="text"
                            value={description}
                            className="form-control mb-2 mr-sm-3"
                            placeholder="Description"
                            onChange={(e) => setDescription(e.target.value)}
                        />

                    </div>

                    <div className="col-xl-2">

                        <button className="btn btn-primary mb-2 mt-4" onClick={handleSubmit}>Add Todo</button>
                    </div>
                </div>
            </form>
            <div className="todos">
                {todos.length > 0 ? todos.map(todo => <div className='post'>
                    <h2>{todo.title}</h2>
                    <p>{todo.description}</p>

                    <button
                        className="btn btn-primary btn-sm"
                        onClick={() => {

                            dispatch(editTodo({ id: todo.id, title: "New Title", description: "New Description" }));
                        }}>
                        Edit
                    </button>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {

                            dispatch(deleteTodo({ id: todo.id }));
                        }}>
                        Delete
                    </button>
                </div>) : 'There is no todo'}
            </div>
        </div>

    );
};



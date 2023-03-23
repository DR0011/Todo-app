import React, { useState } from "react";

export const AddTodo = () => {
    const [value, setValue] = useState({});
    const [error, setError] = useState("");

    const onSubmit = (e) => {
        debugger
        e.preventDefault();

        if (!value?.title) {
            setError((error) => ({
                ...error,
                title: 'Please enter todo title',
            }));
        }
        if (!value?.description) {
            setError((error) => ({
                ...error,
                description: 'Please enter todo description'
            }));
        }

    };

    return (
        <div className="container my-4 py-1 border">
            <form className="mt-3 mb-2" id="todoForm" onSubmit={onSubmit} >
                <div className="row">
                    <div className="col-xl-3">
                        <label className="sr-only">Name</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control mb-2 mr-sm-3"
                            placeholder="Todo Title"
                            defaultValue={value?.title}


                        />
                        <span className="text-danger">{error?.title}</span>
                    </div>

                    <div className="col-xl-3">
                        <label className="sr-only">Description</label>
                        <input
                            type="text"
                            name="description"
                            className="form-control mb-2 mr-sm-3"
                            placeholder="Description"
                            defaultValue={value?.description}

                        />
                        <span className="text-danger">{error?.description}</span>
                    </div>

                    <div className="col-xl-2">
                        <button className="btn btn-primary mb-2 mt-4" type="submit">Create</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
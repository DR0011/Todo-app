import React from "react";


export const TodoLists = () => {

    return (
        <div className="container my-2">
            <div className="row pb-4" style={{ height: "60px" }}>
                <div className="col-xl-12 text-right">
                    <button className="btn btn-danger" >
                        Clear Todos
                    </button>
                </div>
            </div>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th width="3%">
                            <input
                                type={"checkbox"}
                                name={"select_all_todo"}
                            />
                        </th>
                        <th width="30%">Name</th>
                        <th width="42%">Description</th>
                        <th width="8%">Status</th>
                        <th width="20%">Action</th>
                    </tr>
                </thead>

                <tbody>
                </tbody>
            </table >
        </div >
    );
};
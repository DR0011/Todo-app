
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddTodo } from './Components/AddTodo';
import { TodoLists } from './Components/TodoLists';

function App() {
  return (
    <div className="App">
      <h2>Todo Application</h2>
      <AddTodo />
      <TodoLists />
    </div>
  );
}

export default App;

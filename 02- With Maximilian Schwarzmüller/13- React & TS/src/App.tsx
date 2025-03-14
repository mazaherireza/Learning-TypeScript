import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { Todo } from "./types/Todo";
import NewTodo from "./components/NewTodo";

function App() {
  /*
    ... always returns an array with exactly 2 elements
    ... the latest state snapshot for this render cycle
    ... a function to update state and re-render the component
  */
  // ... which type of data our state is of
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const setTodoHandler = (title: string) => {
    /* 
    ... the data in todoList might not necessarily be the latest state when this update performed.
    to gurantee this we can pass a function ...
    setTodoList([...todoList, { _id: "T_4376", title }]);
    */

    setTodoList((prev) => [...prev, { _id: "T_4376", title }]);
  };

  const todoDeleteHandler = (title: string) => {
    setTodoList((prev) => {
      return prev.filter(todo => todo.title !== title)
    })
  }
  return (
    <div className="app">
      {/* pass a pointer... */}
      <NewTodo onSetTodo={setTodoHandler}></NewTodo>
      <TodoList todoList={todoList} onDeleteTodo={todoDeleteHandler}></TodoList>
    </div>
  );
}

export default App;

import React, { useState } from "react";

import "./App.css";
import InputFeild from "./components/InputFeild";
import { Todo } from "./components/model";

import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), todo, isDone: false },
      ]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="Heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
      />
    </div>
  );
};

export default App;

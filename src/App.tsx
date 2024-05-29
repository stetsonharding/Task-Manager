import React, { useState } from "react";

import "./App.css";
import InputFeild from "./components/InputFeild";
import { Todo } from "./components/model";
import { TodoList } from "./components/TodoList";

import { DragDropContext } from "react-beautiful-dnd";


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodo, setCompletedTodo] = useState<Todo[]>([])

  

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
    <DragDropContext onDragEnd={() =>{}}>

    <div className="App">
      <span className="Heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} setTodos={setTodos} completedTodo={completedTodo} setCompletedTodo={setCompletedTodo}/>
    </div>
    </DragDropContext>
  );
};

export default App;

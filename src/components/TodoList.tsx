import React from "react";
import { Todo } from "./model";

import { SingleTodo } from "./SingleTodo";

import "./styles.css";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodo: Todo[];
   setCompletedTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodo, setCompletedTodo }) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
      <div className="todos">
        <span className="todos__heading">Active Tasks</span>

        {todos.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className="todos remove">
        <span className="todos__heading">Completed Tasks</span>

        {completedTodo.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>

      </Droppable>
    </div>
  );
};

import React from "react";
import { Todo } from "./model";

import { SingleTodo } from "./SingleTodo";

import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <>
      {todos.map((todo) => (
        <div className="todos">
          <SingleTodo todo={todo.todo} />
        </div>
      ))}
    </>
  );
};

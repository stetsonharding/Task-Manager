import React from "react";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

import "./styles.css";

import { Todo } from "./model";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleCompleteTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );

    console.log(todo);
  };

  const handleDeleteTask = (id: number) => {
    const updatedTasks = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTasks);
  };

  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>
      <div className="todo__actionButtons">
        <div>
          <PencilIcon className="action_btn" />
        </div>
        <div>
          <TrashIcon
            className="action_btn"
            onClick={() => handleDeleteTask(todo.id)}
          />
        </div>
        <div>
          <PlusIcon
            className="action_btn"
            onClick={() => handleCompleteTodo(todo.id)}
          />
        </div>
      </div>
    </form>
  );
};

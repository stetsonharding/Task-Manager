import React, { useState } from "react";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

import "./styles.css";

import { Todo } from "./model";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [isTaskEdited, setIsTaskEdited] = useState<boolean>(false);
  const [editedTaskValue, setEditedTaskValue] = useState<string>(todo.todo);

  const handleCompleteTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );

    console.log(todo);
  };

  const handleDelete = (id: number) => {
    const updatedTasks = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTasks);
  };

  const handleEdit = (id: number, e:React.FormEvent<HTMLFormElement>) => {
e.preventDefault();

let updatedTodo = todos.map(item => item.id === id ? {...item, todo: editedTaskValue} : item)
setTodos(updatedTodo)

setIsTaskEdited(false)
  };

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(todo.id,e)}>
      {isTaskEdited ? (
        <input
          type="text"
          value={editedTaskValue}
          onChange={(e) => setEditedTaskValue(e.target.value)}
        />
      ) : (
        <span
          className={
            todo.isDone
              ? "todos__single--text--completed"
              : "todos__single--text"
          }
        >
          {todo.todo}
        </span>
      )}

      <div className="todo__actionButtons">
        <div>
          <PencilIcon
            className="action_btn"
            onClick={() => setIsTaskEdited(!isTaskEdited)}
          />
        </div>
        <div>
          <TrashIcon
            className="action_btn"
            onClick={() => handleDelete(todo.id)}
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

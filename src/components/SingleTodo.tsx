import React from 'react'
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

import "./styles.css"

import { Todo } from './model';

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

 export const SingleTodo = ({todo, todos, setTodos}: Props) => {
  return (
<form className="todos__single">
  <span className="todos__single--text">{todo.todo}</span>
  <div className="todo__actionButtons">
    <div>
      <PencilIcon className="action_btn" />
      </div>
      <div>
      <TrashIcon className="action_btn"/>
      </div>
      <div>
      <PlusIcon className="action_btn" />
      </div>
  </div>
</form>
  )
}



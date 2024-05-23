import React from 'react'
import { Todo } from './model';

import "./styles.css"

interface Props {
    todos: Todo[];
}

export const TodoList: React.FC<Props> = ({todos}) => {


  return (
   <div className="todos"></div>
  )
}

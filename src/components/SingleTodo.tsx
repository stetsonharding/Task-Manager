import React from 'react'
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

interface Props {
    todo: string;
}

export const SingleTodo: React.FC<Props> = ({todo}) => {
  return (
      <>
    <div className="todo">{todo}</div>
<div className="todo__actionButtons">
  <div className="todo__edit">
    <PencilIcon className="editIcon" />
  </div>
  <div className="deleteIcon">
    <TrashIcon />
  </div>
  <div className="completeIcon">
    <PlusIcon />
  </div>
</div> 
    
    </>
  )
}

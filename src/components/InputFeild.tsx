import React, { ReactNode, useRef } from 'react'

import "./styles.css"

interface Props{
  todo:string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}


const InputFeild = ({todo, setTodo, handleAddTodo}:Props) => {
  //Use Ref Hook with TypeScript
  const inputRef = useRef<HTMLInputElement>(null);
 
  return (
   <form className="input" onSubmit={(e) => {
    handleAddTodo(e)
    inputRef.current?.blur();
   }}>
    <input ref={inputRef} className="input__box" type="input" value={todo} onChange={(e) => setTodo(e.target.value)}  placeholder='Enter a Todo'/>
    <button className="input__submit" type="submit">Go</button>
   </form>
  )
}

export default InputFeild
import React, { ReactNode } from 'react'

import "./styles.css"

const InputFeild = () => {
  return (
   <form className="input">
    <input className="input__box" type="input"  placeholder='Enter a Todo'/>
    <button className="input__submit" type="submit">Go</button>
   </form>
  )
}

export default InputFeild
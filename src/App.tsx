import React, { useState } from "react";

import "./App.css";
import InputFeild from "./components/InputFeild";

const App: React.FC = () => {

  //Define the state type in TypeScript
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <span className="Heading">Taskify</span>
      <InputFeild />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>Todo List</h1>
          <Lists todoData={todoData} setTodoData={setTodoData} />
          <Form
            todoData={todoData}
            setValue={setValue}
            setTodoData={setTodoData}
            value={value}
          />
        </div>
      </div>
    </div>
  );
}

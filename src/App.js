import React, { useState } from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>Todo List</h1>
        </div>

        <Lists todoData={todoData} setTodoData={setTodoData} />
        <Form
          todoData={todoData}
          setValue={setValue}
          setTodoData={setTodoData}
          value={value}
        />
      </div>
    </div>
  );
}

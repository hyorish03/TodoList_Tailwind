import React, { useState, useCallback } from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

const initialTodoData = localStorage.getItem("todoData")
  ? JSON.parse(localStorage.getItem("todoData"))
  : [];
export default function App() {
  const [todoData, setTodoData] = useState(initialTodoData);
  const [value, setValue] = useState("");

  const handleClick = useCallback(
    (id) => {
      let newTodo = todoData.filter((todo) => todo.id !== id);
      setTodoData(newTodo);
      localStorage.setItem("todoData", JSON.stringify(newTodo));
    },
    [todoData]
  );

  const handleRemoveClick = useCallback(() => {
    setTodoData([]);
    localStorage.setItem("todoData", JSON.stringify([]));
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>Todo List</h1>
          <button onClick={handleRemoveClick}> Delete All</button>
        </div>

        <Lists
          handleClick={handleClick}
          todoData={todoData}
          setTodoData={setTodoData}
        />
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

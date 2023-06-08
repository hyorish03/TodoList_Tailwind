import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleClick = (id) => {
    let newTodo = todoData.filter((todo) => todo.id !== id);
    console.log("newTodo", newTodo);
    setTodoData({ todoData: newTodo });
  };

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodoData([...todoData, newTodo]);
    setValue("");
  };

  const handleCompleteChange = (id) => {
    let newTodo = todoData.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoData({ todoData: newTodo });
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>Todo List</h1>
        </div>
        {todoData.map((data) => (
          <div key={data.id} style={getStyle(data.completed)}>
            <input
              type="checkbox"
              onChange={() => handleCompleteChange(data.id)}
              defaultChecked={data.completed}
            />
            {data.title}
            <button style={btnStyle} onClick={() => handleClick(data.id)}>
              x
            </button>
          </div>
        ))}

        <form style={{ display: "flex" }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            style={{ flex: "10", padding: "5px" }}
            placeholder="해야할 일을 입력하세요"
            onChange={handleChange}
            value={value}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: 1 }}
          />
        </form>
      </div>
    </div>
  );
}

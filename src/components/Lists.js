import React from "react";

function Lists({ todoData, setTodoData }) {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const handleCompleteChange = (id) => {
    let newTodo = todoData.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoData(newTodo);
  };

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleClick = (id) => {
    let newTodo = todoData.filter((todo) => todo.id !== id);
    setTodoData(newTodo);
  };

  return (
    <div>
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
    </div>
  );
}

export default Lists;

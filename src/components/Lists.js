import React from "react";

function Lists({ todoData, setTodoData }) {
  const handleCompleteChange = (id) => {
    let newTodo = todoData.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoData(newTodo);
  };

  const handleClick = (id) => {
    let newTodo = todoData.filter((todo) => todo.id !== id);
    setTodoData(newTodo);
  };

  return (
    <div>
      {todoData.map((data) => (
        <div key={data.id}>
          <div className="flex justify-between item-center w-full bg-gray-100 border-2 border-gray-200 rounded my-2 p-2">
            <div className="item-center">
              <input
                className="mx-2"
                type="checkbox"
                onChange={() => handleCompleteChange(data.id)}
                defaultChecked={data.completed}
              />
              <span className={data.completed ? "line-through" : undefined}>
                {data.title}
              </span>
            </div>
            <button
              className="px-4 float-right"
              onClick={() => handleClick(data.id)}
            >
              x
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Lists;

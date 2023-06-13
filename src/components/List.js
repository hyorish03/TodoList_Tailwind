import React, { useState } from "react";

function List({
  id,
  completed,
  title,
  todoData,
  setTodoData,
  provided,
  snapshot,
  handleClick,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");

  const handleCompleteChange = (id) => {
    let newTodo = todoData.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoData(newTodo);
    localStorage.setItem("todoData", JSON.stringify(newTodo));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.title = editValue;
      }
      return data;
    });
    setTodoData(newTodoData);
    setIsEditing(false);
    localStorage.setItem("todoData", JSON.stringify(newTodoData));
  };

  if (isEditing) {
    return (
      <div className="flex justify-between item-center w-full border-2 bg-gray-100 border-gray-200 rounded my-2 p-2">
        <div className="items-center">
          <form onSubmit={handleSubmit}>
            <input
              className="w-full px-3 py-3 mr-4 text-gray-500 rounded"
              value={editValue}
              autoFocus
              onChange={handleEditChange}
            />
          </form>
        </div>
        <div className="items-center flex">
          <button type="submit" onClick={handleSubmit}>
            save
          </button>
          <button
            className="px-4 float-right"
            onClick={() => setIsEditing(false)}
          >
            x
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${
          snapshot.isDragging ? " bg-gray-400" : " bg-gray-100"
        } flex justify-between item-center w-full border-2 border-gray-200 rounded my-2 p-2 `}
      >
        <div className="items-center">
          <input
            className="mx-2"
            type="checkbox"
            onChange={() => handleCompleteChange(id)}
            defaultChecked={completed}
          />
          <span className={completed ? "line-through" : undefined}>
            {title}
          </span>
        </div>
        <div className="items-center flex">
          <button onClick={handleEdit}>edit</button>
          <button className="px-4 float-right" onClick={() => handleClick(id)}>
            x
          </button>
        </div>
      </div>
    );
  }
}

export default List;

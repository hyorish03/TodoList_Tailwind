import React from "react";

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
  const handleCompleteChange = (id) => {
    let newTodo = todoData.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoData(newTodo);
  };

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
        <span className={completed ? "line-through" : undefined}>{title}</span>
      </div>
      <div className="items-center">
        <button className="px-4 float-right" onClick={() => handleClick(id)}>
          x
        </button>
      </div>
    </div>
  );
}

export default List;

import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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

  const handleEnd = (result) => {
    console.log(result);

    //목적지가 없다면 함수 종료
    if (!result.destination) return;

    // 리액트 불변성을 위해 원본 배열 복사
    const newTodo = [...todoData];

    // 1. 변경시키려는 아이템을 배열에서 지운다
    // 2. return 값으로 지워진 아이템을 잡아준다.
    const [reorderedItem] = newTodo.splice(result.source.index, 1);
    // 3. 원하는 자리에 redorededItem을 넣어준다.
    newTodo.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodo);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  index={index}
                  draggableId={data.id.toString()}
                >
                  {(provided, snapshot) => (
                    <div
                      key={data.id}
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
                          onChange={() => handleCompleteChange(data.id)}
                          defaultChecked={data.completed}
                        />
                        <span
                          className={
                            data.completed ? "line-through" : undefined
                          }
                        >
                          {data.title}
                        </span>
                      </div>
                      <div className="items-center">
                        <button
                          className="px-4 float-right"
                          onClick={() => handleClick(data.id)}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}{" "}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Lists;

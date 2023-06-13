import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import List from "./List";

function Lists({ todoData, setTodoData, handleClick }) {
  console.log("Lists is rendering");
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
    localStorage.setItem("todoData", JSON.stringify(newTodo));
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
                    <List
                      handleClick={handleClick}
                      todoData={todoData}
                      setTodoData={setTodoData}
                      id={data.id}
                      title={data.title}
                      key={data.id}
                      completed={data.completed}
                      provided={provided}
                      snapshot={snapshot}
                    />
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

export default React.memo(Lists);

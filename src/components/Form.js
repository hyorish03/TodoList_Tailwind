import React from "react";

function Form({ todoData, setValue, setTodoData, value }) {
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
  return (
    <form style={{ display: "flex" }} onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        style={{ flex: "10", padding: "5px" }}
        placeholder="해야할 일을 입력하세요"
        onChange={handleChange}
        value={value}
      />
      <input type="submit" value="입력" className="btn" style={{ flex: 1 }} />
    </form>
  );
}

export default Form;

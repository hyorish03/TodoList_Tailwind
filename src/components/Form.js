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
    <form onSubmit={handleSubmit} className="flex pt-2">
      <input
        className="w-full px-3 py-2 mr-4 text-gray-500 rounded shadow"
        type="text"
        name="title"
        placeholder="해야할 일을 입력하세요"
        onChange={handleChange}
        value={value}
      />
      <input
        className="p-2 text-center w-fit text-blue-400 border-2 border-blue-400 rounded drop-shadow-lg hover:bg-blue-400 hover:text-white"
        value="입력"
        type="submit"
        onSubmit={handleSubmit}
      />
    </form>
  );
}

export default Form;

import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    todoData: [],
    value: "",
  };

  handleClick = (id) => {
    let newTodo = this.state.todoData.filter((todo) => todo.id !== id);
    console.log("newTodo", newTodo);
    this.setState({ todoData: newTodo });
  };

  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };
    this.setState({ todoData: [...this.state.todoData, newTodo], value: "" });
  };

  handleCompleteChange = (id) => {
    let newTodo = this.state.todoData.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todoData: newTodo });
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>Todo List</h1>
          </div>
          {this.state.todoData.map((data) => (
            <div key={data.id} style={this.getStyle(data.completed)}>
              <input
                type="checkbox"
                onChange={() => this.handleCompleteChange(data.id)}
                defaultChecked={data.completed}
              />
              {data.title}
              <button
                style={this.btnStyle}
                onClick={() => this.handleClick(data.id)}
              >
                x
              </button>
            </div>
          ))}

          <form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="title"
              style={{ flex: "10", padding: "5px" }}
              placeholder="해야할 일을 입력하세요"
              onChange={this.handleChange}
              value={this.state.value}
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
}

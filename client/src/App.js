import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    let todos = [];
    let doneTodos = [];
    if(localStorage.getItem("todos")) {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    if(localStorage.getItem("doneTodos")) {
      todos = JSON.parse(localStorage.getItem("doneTodos"));
  }
    this.state = {
        todos,
        doneTodos
    }
    this.onTodosChange = this.onTodosChange.bind(this);
    this.onDoneTodosChange = this.onDoneTodosChange.bind(this);
    this.onDeleteTodo = this.onDeleteTodo.bind(this);
  }

  onTodosChange(todo) {
    this.setState((prevState) => ({
      todos: prevState.todos.concat([todo])
    }), () => {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    });
  }

  onDoneTodosChange(index) {
    console.log(index);
    this.onDeleteTodo(index);
    let todo = this.state.todos[index];
    this.setState((prevState) => ({
      doneTodos: prevState.doneTodos.concat([todo])
    }), () => {
      localStorage.setItem("doneTodos", JSON.stringify(this.state.doneTodos));
    });
  }

  onDeleteTodo(index) {
    let array = [...this.state.todos];
    if(index > -1) {
      array.splice(index, 1);
      this.setState({todos: array}, () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      });
    }
  }

  render() {
    return (
      <div className="ui container">
        <Input todos={this.state.todos} onTodosChange={this.onTodosChange} />
        <List todos={this.state.todos} onDeleteTodo={this.onDeleteTodo} onDoneTodos={this.onDoneTodosChange} />
        <List doneTodos={this.state.doneTodos} />
      </div>
    );
  }
}

export default App;

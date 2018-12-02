import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    let todos = [];
    if(localStorage.getItem("todos")) {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    this.state = {
        todos
    }
    this.onTodosChange = this.onTodosChange.bind(this);
    this.onDeleteTodo = this.onDeleteTodo.bind(this);
  }

  onTodosChange(todo) {
    this.setState((prevState) => ({
      todos: prevState.todos.concat([todo])
    }), () => {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    });
  }

  onDeleteTodo(index) {
    console.log(index);
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
        <List todos={this.state.todos} onDeleteTodo={this.onDeleteTodo}/>
      </div>
    );
  }
}

export default App;

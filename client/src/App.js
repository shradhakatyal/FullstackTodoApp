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
  }

  onTodosChange(todo) {
    this.setState((prevState) => ({
      todos: prevState.todos.concat([todo])
    }));
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  render() {
    return (
      <div className="ui container">
        <Input todos={this.state.todos} onTodosChange={this.onTodosChange} />
        <List todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;

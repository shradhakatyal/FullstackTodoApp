import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDoneTodos = this.handleDoneTodos.bind(this);
    }
    handleDelete(index) {
        this.props.onDeleteTodo(index);
    }

    handleDoneTodos(index) {
        this.props.onDoneTodos(index);
    }

    render() {
        const todos = this.props.todos;
        const done = this.props.doneTodos;
        let listItems;
        let doneItems;
        if(todos) {
            listItems = todos.map((todo, index) => {
                return (<ListItem isDone={false} key={index} index={index} value={todo} handleDelete={this.handleDelete} handleDoneTodos={this.handleDoneTodos} />);
            });
        }
        if(done) {
            doneItems = done.map((todo, index) => {
                return (<ListItem isDone={true} key={index} index={index} value={todo} />);
            });
        }
        
        
        return (
            <div className="ui relaxed divided list">
                {todos?listItems:''}
                {done?doneItems:''}
            </div>
        );
    }
}

export default List;
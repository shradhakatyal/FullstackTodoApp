import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(index) {
        this.props.onDeleteTodo(index);
    }

    render() {
        const todos = this.props.todos;
        const listItems = todos.map((todo, index) => {
            return (<ListItem key={index} index={index} value={todo} handleDelete={this.handleDelete}/>);
        });
        return (
            <div className="ui relaxed divided list">
                {listItems}
            </div>
        );
    }
}

export default List;
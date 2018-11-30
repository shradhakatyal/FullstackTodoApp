import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    render() {
        const todos = this.props.todos;
        const listItems = todos.map((todo, index) => {
            return (<ListItem key={index} value={todo}/>);
        });
        return (
            <div className="ui relaxed divided list">
                {listItems}
            </div>
        );
    }
}

export default List;
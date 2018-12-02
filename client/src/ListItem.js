import React, { Component } from 'react';
import './App.css';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.onTodosDone = this.onTodosDone.bind(this);
    }
    handleDeleteClick() {
        this.props.handleDelete(this.props.index);
    }
    onTodosDone() {
        this.props.handleDoneTodos(this.props.index);
    }

    render() {
        return (
            <div className="item">
                <div className="header" onClick={this.onTodosDone}>
                    {this.props.value}
                    {this.props.isDone?<i onClick={this.handleDeleteClick} className="icon trash alternate outline float-right"></i>:''}
                    
                </div>
            </div>
        );
    }
}

export default ListItem;
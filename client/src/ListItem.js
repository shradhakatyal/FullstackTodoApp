import React, { Component } from 'react';
import './App.css';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }
    handleDeleteClick() {
        this.props.handleDelete(this.props.index);
    }
    render() {
        return (
            <div className="item">
                <div className="header">
                    {this.props.value}
                    <i onClick={this.handleDeleteClick} className="icon trash alternate outline float-right"></i>
                </div>
            </div>
        );
    }
}

export default ListItem;
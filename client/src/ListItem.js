import React, { Component } from 'react';
import './App.css';

class ListItem extends Component {
    render() {
        return (
            <div className="item">
                <div className="header">
                    {this.props.value}
                    <i className="icon trash alternate outline float-right"></i>
                </div>
            </div>
        );
    }
}

export default ListItem;
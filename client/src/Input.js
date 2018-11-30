import React, { Component } from 'react';

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onTodosChange(this.state.todo);
        this.setState({todo: ''});
    }

    handleChange(e) {
        this.setState({todo: e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="ui form">
                <div className="ui field">
                    <input type="text" placeholder="Enter a thing to do" onChange={this.handleChange} value={this.state.todo}></input>
                </div>
                
                <button className="ui primary button" type="submit">Add</button>
            </form>
        );
    }
}

export default Input;
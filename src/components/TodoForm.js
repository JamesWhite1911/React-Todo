import React, { Component } from 'react';

export default class TodoForm extends Component {
    //constructor
    constructor() {
        //need super since we're extending Component
        super();
        //set our initial state
        this.state = {
            inputValue: ""
        }
    }

    //handle state
    updateState = e => {
        this.setState({
            inputValue: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.inputValue);
        this.setState({
            inputValue:""
        })
    }

    //render our jsx
    render() {
        const { handleClear } = this.props
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label>Todo: </label>
                <input
                name='task'
                type='text'
                value={this.state.inputValue}
                onChange={this.updateState}
                />
                <button>Submit</button>
            </form>
            <button className="clear-btn" onClick={handleClear}>Clear List</button>
            </>
        )
    }
}
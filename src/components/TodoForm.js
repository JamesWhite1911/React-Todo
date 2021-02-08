import React, { Component } from 'react';

export default class TodoForm extends Component {
    render() {
        const { inputValue } = this.props

        return (
            <>
            <form>
                <input
                name='todo'
                type='text'
                value={inputValue}
                />
            </form>
            </>
        )
    }
}
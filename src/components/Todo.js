import React from 'react';
import './Todo.css'

const Todo = props => {
    const handleClick = () => {
        props.toggleItem(props.todo.id);
    }

    return (
        <div className={`task${props.todo.completed ? ' completed' : ''}`} onClick={handleClick}>
            <p>
                {props.todo.task}
            </p>
        </div>
    )
}

export default Todo;
import React from 'react';
import Todo from './Todo';


const TodoList = props => {

    return (
        <div className="todo-list">
            {props.tasks.map(task => (
                <Todo key={task.id} todo={task} />
            ))}
        </div>
    )
}

export default TodoList;
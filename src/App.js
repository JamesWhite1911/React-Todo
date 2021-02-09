import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const tasks = [];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

  addTask = taskName => {
    const task = {
      task: taskName,
      id: this.state.tasks.length,
      completed: false,
    }

    const newTasks = [...this.state.tasks, task];

    this.setState({
      tasks: newTasks
    })
  }

  handleClear = () => {
    const newTasks = this.state.tasks.filter(task => {
      return(!task.completed);
    })
    this.setState({
      tasks: newTasks
    })
  }

  toggleItem = (clickedItemId) => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === clickedItemId) {
          console.log(item.completed, item.id, clickedItemId)
          return {
            ...item,
            completed: !item.completed
          }
        }
        else {
          console.log("false")
          return item;
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <TodoList tasks={this.state.tasks} toggleItem={this.toggleItem} updateState={this.updateState}/>
        </div>
        <TodoForm addTask={this.addTask} handleClear={this.handleClear} toggleItem={this.toggleItem}/>
      </div>
    );
  }
}

export default App;

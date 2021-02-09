import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      tasks: tasks,
      id: "",
      completed: false,
    }
  }

  //update state

  updateState = () => {
    const newTasks = this.state.tasks.map(task => {
      //do a thing
      return {
        ...tasks,
        task: task,
      }
    })
    this.setState({
      tasks: newTasks,
    })
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
    const newTasks = this.state.tasks.filter(item => {
      return (item.completed);
    });

    this.setState({
      tasks: newTasks
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <TodoList tasks={this.state.tasks} addTask={this.addTask} />
        </div>
        <TodoForm addTask={this.addTask} handleClear={this.handleClear}/>
      </div>
    );
  }
}

export default App;

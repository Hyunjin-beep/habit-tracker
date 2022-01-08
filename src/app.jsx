import './app.css'
import Habit from './components/habit'
import Habits from './components/habits'
import Navbar from './components/navbar'
import React, { Component } from 'react'

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Coding', count: 0 },
      { id: 3, name: 'Running', count: 0 },
    ],
  }

  handleIncrement = habit => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    habits[index].count++
    this.setState(state => ({ habits: habits }))
  }

  handleDecrement = habit => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)

    if (habits[index].count > 0) {
      habits[index].count--
    }

    this.setState({ habits: habits })
  }

  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id)
    this.setState({ habits: habits })
  }

  handleAdd = name => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ]
    this.setState({ habits: habits })
  }

  handleReset = () => {
    const habits = this.state.habits.map(item => {
      if (item.count !== 0) {
        return { ...item, count: 0 }
      }

      return item
    })

    this.setState({ habits: habits })
  }

  render() {
    return (
      <>
        <Navbar
          habits={this.state.habits.filter(item => item.count > 0)}
        ></Navbar>
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        ></Habits>
      </>
    )
  }
}

export default App

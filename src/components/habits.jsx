import React, { Component } from 'react'
import Habit from './habit'

class Habits extends Component {
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

  render() {
    return (
      <ul className="habits">
        {this.state.habits.map(habit => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    )
  }
}

export default Habits

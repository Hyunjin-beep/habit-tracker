import React, { Component } from 'react'
import Habit from './habit'
import HabitInputForm from './habitInputForm'
import Navbar from './navbar'

class Habits extends Component {
  //   state = {
  //     habits: [
  //       { id: 1, name: 'Reading', count: 0 },
  //       { id: 2, name: 'Coding', count: 0 },
  //       { id: 3, name: 'Running', count: 0 },
  //     ],
  //   }

  handleIncrement = habit => {
    // const habits = [...this.state.habits]
    // const index = habits.indexOf(habit)
    // habits[index].count++
    // this.setState(state => ({ habits: habits }))
    this.props.onIncrement(habit)
  }

  handleDecrement = habit => {
    // const habits = [...this.state.habits]
    // const index = habits.indexOf(habit)

    // if (habits[index].count > 0) {
    //   habits[index].count--
    // }

    // this.setState({ habits: habits })
    this.props.onDecrement(habit)
  }

  handleDelete = habit => {
    // const habits = this.state.habits.filter(item => item.id !== habit.id)
    // this.setState({ habits: habits })
    this.props.onDelete(habit)
  }

  handleAdd = name => {
    this.props.onAdd(name)
  }

  handleReset = () => {
    this.props.onReset()
  }

  render() {
    return (
      <div>
        <HabitInputForm onAdd={this.handleAdd}></HabitInputForm>
        <ul className="habits">
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className="reset-btn" onClick={this.handleReset}>
          Reset All
        </button>
      </div>
    )
  }
}

export default Habits

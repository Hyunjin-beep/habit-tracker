import React, { Component } from 'react'

class Habit extends Component {
  //   state = {
  //     count: 0,
  //   }

  handleIncrement = props => {
    this.props.onIncrement(this.props.habit)
  }

  handleDecrement = props => {
    this.props.onDecrement(this.props.habit)
  }

  handleDelete = props => {
    this.props.onDelete(this.props.habit)
  }

  render() {
    const { name, count } = this.props.habit
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-increase" onClick={this.handleIncrement}>
          +
        </button>
        <button className="habit-decrease" onClick={this.handleDecrement}>
          -
        </button>
        <button className="habit-delete" onClick={this.handleDelete}>
          x
        </button>
      </li>
    )
  }
}

export default Habit

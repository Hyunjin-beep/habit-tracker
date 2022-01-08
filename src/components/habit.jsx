import React, { PureComponent } from 'react'

class Habit extends PureComponent {
  //   state = {
  //     count: 0,
  //   }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit)
  }

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit)
  }

  handleDelete = () => {
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

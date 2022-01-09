import React, { memo } from 'react'
import Habits from './habits'

const Habit = memo(({ habit, onIncrement, onDecrement, onDelete }) => {
  const handleIncrement = () => {
    onIncrement(habit)
  }

  const handleDecrement = () => {
    onDecrement(habit)
  }

  const handleDelete = () => {
    onDelete(habit)
  }

  return (
    <li className="habit">
      <span className="habit-name">{habit.name}</span>
      <span className="habit-count">{habit.count}</span>
      <button className="habit-increase" onClick={handleIncrement}>
        +
      </button>
      <button className="habit-decrease" onClick={handleDecrement}>
        -
      </button>
      <button className="habit-delete" onClick={handleDelete}>
        x
      </button>
    </li>
  )
})

export default Habit

import React, { Component } from 'react'
import Habit from './habit'
import HabitInputForm from './habitInputForm'

const Habits = ({
  habits,
  onIncrement,
  onDecrement,
  onDelete,
  onAdd,
  onReset,
}) => {
  return (
    <div>
      <HabitInputForm onAdd={onAdd}></HabitInputForm>
      <ul className="habits">
        {habits.map(habit => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <button className="reset-btn" onClick={onReset}>
        Reset All
      </button>
    </div>
  )
}

export default Habits

// //   state = {
// //     habits: [
// //       { id: 1, name: 'Reading', count: 0 },
// //       { id: 2, name: 'Coding', count: 0 },
// //       { id: 3, name: 'Running', count: 0 },
// //     ],
// //   }

// const handleIncrement = habit => {
//   // const habits = [...this.state.habits]
//   // const index = habits.indexOf(habit)
//   // habits[index].count++
//   // this.setState(state => ({ habits: habits }))
//   this.props.onIncrement(habit)
// }

// const handleDecrement = habit => {
//   // const habits = [...this.state.habits]
//   // const index = habits.indexOf(habit)

//   // if (habits[index].count > 0) {
//   //   habits[index].count--
//   // }

//   // this.setState({ habits: habits })
//   this.props.onDecrement(habit)
// }

// const handleDelete = habit => {
//   // const habits = this.state.habits.filter(item => item.id !== habit.id)
//   // this.setState({ habits: habits })
//   this.props.onDelete(habit)
// }

// const handleAdd = name => {
//   this.props.onAdd(name)
// }

// const handleReset = () => {
//   this.props.onReset()
// }

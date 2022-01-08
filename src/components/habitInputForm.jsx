import React, { memo } from 'react'

const HabitInputForm = memo(props => {
  const input = React.createRef()

  const handleSubmit = event => {
    event.preventDefault()
    const name = input.current.value
    if (name !== '') {
      props.onAdd(name)
    }

    input.current.value = ''
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input type="text" className="inputForAdd" ref={input} />
      <button className="addHabit">Add</button>
    </form>
  )
})
export default HabitInputForm

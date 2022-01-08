import React, { Component } from 'react'

class HabitInputForm extends Component {
  input = React.createRef()

  handleSubmit = event => {
    event.preventDefault()
    const name = this.input.current.value
    if (name !== '') {
      this.props.onAdd(name)
    }

    this.input.current.value = ''
  }
  render() {
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <input type="text" className="inputForAdd" ref={this.input} />
        <button className="addHabit">Add</button>
      </form>
    )
  }
}

export default HabitInputForm

import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <>
        <span className="nav-title">Habit Tracker</span>
        <span className="total-count">{this.props.habits.length}</span>
      </>
    )
  }
}

export default Navbar

import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    console.log('navvar')
    return (
      <nav className="navbar">
        <span className="nav-title">Habit Tracker</span>
        <span className="total-count">
          You have done {this.props.habits.length} habits!
        </span>
      </nav>
    )
  }
}

export default Navbar

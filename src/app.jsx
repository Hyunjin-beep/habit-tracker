import './app.css'
import Habits from './components/habits'
import Navbar from './components/navbar'

import React, { useState, useCallback } from 'react'

const App = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Reading', count: 0 },
    { id: 2, name: 'Coding', count: 0 },
    { id: 3, name: 'Running', count: 0 },
  ])

  const handleIncrement = useCallback(habit => {
    setHabits(habits =>
      habits.map(item => {
        if (item.id === habit.id) {
          return { ...item, count: item.count + 1 }
        }

        return item
      })
    )
  }, [])

  const handleDecrement = useCallback(habit => {
    setHabits(habits =>
      habits.map(item => {
        if (item.id === habit.id) {
          return { ...item, count: item.count <= 0 ? 0 : item.count - 1 }
        }

        return item
      })
    )
  }, [])

  const handleDelete = useCallback(habit => {
    setHabits(habits => habits.filter(item => item.id !== habit.id))
  }, [])

  const handleAdd = useCallback(name => {
    setHabits(habits => [...habits, { id: Date.now(), name: name, count: 0 }])
  }, [])

  const handleReset = useCallback(() => {
    setHabits(habits =>
      habits.map(item => {
        if (item.count !== 0) {
          return { ...item, count: 0 }
        }

        return item
      })
    )
  }, [])

  return (
    <div>
      <Navbar habits={habits.filter(item => item.count > 0).length}></Navbar>
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      ></Habits>
    </div>
  )
}
export default App

// class App extends Component {
//   // state = {
//   //   habits: [
//   //     { id: 1, name: 'Reading', count: 0 },
//   //     { id: 2, name: 'Coding', count: 0 },
//   //     { id: 3, name: 'Running', count: 0 },
//   //   ],
//   // }

//   handleIncrement = habit => {
//     // when using purecomponent, the below codes are just changing data inside state so it wont update
//     // in habit.jsx, the component will take only props which is habit.
//     // function like onIncrement only once created when the class is defined so it cannot make render function be called

//     // const habits = [...this.state.habits]
//     // const index = habits.indexOf(habit)
//     // habits[index].count++

//     const habits = this.state.habits.map(item => {
//       if (item.id === habit.id) {
//         return { ...item, count: item.count + 1 }
//       }

//       return item
//     })
//     this.setState(state => ({ habits: habits }))
//   }

//   handleDecrement = habit => {
//     // const habits = [...this.state.habits]
//     // const index = habits.indexOf(habit)

//     // if (habits[index].count > 0) {
//     //   habits[index].count--
//     // }

//     const habits = this.state.habits.map(item => {
//       if (item.id === habit.id) {
//         return { ...item, count: habit.count > 0 ? habit.count - 1 : 0 }
//       }

//       return item
//     })

//     this.setState({ habits: habits })
//   }

//   handleDelete = habit => {
//     const habits = this.state.habits.filter(item => item.id !== habit.id)
//     this.setState({ habits: habits })
//   }

//   handleAdd = name => {
//     const habits = [
//       ...this.state.habits,
//       { id: Date.now(), name: name, count: 0 },
//     ]
//     this.setState({ habits: habits })
//   }

//   handleReset = () => {
//     const habits = this.state.habits.map(item => {
//       // if count is 0, dont need to reset
//       // the below code will update all
//       // return { ...item, count: 0 }
//       if (item.count !== 0) {
//         return { ...item, count: 0 }
//       }

//       return item
//     })

//     this.setState({ habits: habits })
//   }

// }

// export default App

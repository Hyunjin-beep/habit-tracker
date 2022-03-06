# Title: Habit Tracker

# Languages: React

> ## TABLE OF CONTENTS

### 1. About the project

### 2. Why do I start this project?

### 3. Details of project

### 4. Reference

---

## 1. About the project

This project is habit tracker.

And I studied React first time while making this project.

Users can add their habit and increase/decrease/delete the habit.

---

## 2. Why do I start this project?

This is my first React project so it means I studied React basics while making this Habit Tracker project.

---

## 3. Detail of Project

There are overall three functions simply.

Add habit, Increase/Decrease/Delete Habit number or the habit, and reset all Habit number

#

_Main Page_

![habit 1st](https://user-images.githubusercontent.com/64330888/156941299-1c14723d-e659-42b5-b82c-23a63e0ec01a.png)

Reading, Coding, Running are default habit.

I made them as default by setting state and passed the state to Habits as props.

In Habits.jsx, while the props mapping, the item is passed to Habit.jsx.

```
    // in app.jsx
    state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Coding', count: 0 },
      { id: 3, name: 'Running', count: 0 },
    ],
  }

  // in habits.jsx
  {this.props.habits.map(habit => (
      <Habit
        key={habit.id}
        habit={habit}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
      />
  ))}
```

#

_Add Habit_
![habit add](https://user-images.githubusercontent.com/64330888/156941302-16894acb-52c0-4eea-b912-50d317d32292.png)

User can add a habit through input.

In app.jsx, after taking an added habit name as parameter in habitInputForm.jsx, I made a new state while keeping the original state.

```
    handleAdd = name => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ]
    this.setState({ habits: habits })
  }
```

#

_Increase & Decrease Habit count_
![habit increase](https://user-images.githubusercontent.com/64330888/156941305-678250d5-cbda-4e70-965c-ca749690f269.png)

User can increase or decrease count of habit when they want.

Take the habit data from habit.jsx and if increasing, while the state mapping, increase the count of the habit that has the same ID as the taken habit ID.The opposite is the same.

```
const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...item, count: item.count + 1 }
      }

      return item
    })
    this.setState(state => ({ habits: habits }))
```

When the count of one habit is over 1, the total count of all habits is up by 1.

For this, I returned the habits that has count over 0.

#

_Delete the habit_
![habit delete](https://user-images.githubusercontent.com/64330888/156941303-496246b6-a32c-48ef-abfc-6050277cf811.png)

User can delete the habit that they want.

After taking the deleted data, return the list of the habit that has the different ID as the deleted habit ID.

#

_Reset all_
![habit reset](https://user-images.githubusercontent.com/64330888/156941307-a016a098-2d1a-47c2-9fcd-5fcda883519e.png)

User can reset all counts by clicking 'Reset All' button.

I just simply set while mapping state(habits), make the count as 0 if it is not 0.

#

Overall Structure

- App
  - Navbar
  - Habits
    - Habit
    - Habit
    - Habit

---

## 4. Reference

Dream Coding Lecture

- https://academy.dream-coding.com/

React Official Document

- https://reactjs.org/docs/introducing-jsx.html

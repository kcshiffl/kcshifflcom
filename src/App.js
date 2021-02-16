import React, { useState } from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Arrow from './components/General/Arrow'
import { FaChevronDown } from 'react-icons/fa'
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const App = () => {

  /**
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },

    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },

    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000)+1
    console.log(id)
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id == id ? { ...task, reminder: !task.reminder} : task))
  }

  **/

  const [skills, setSkills] = useState([
    {
      row: 1,
      name: 'Languages',
      open: true,
    },

    {
      row: 2,
      name: 'Environments',
      open: false,
    },

    {
      row: 3,
      name: 'Applications',
      open: false,
    },
  ])

  const toggleSkills = (row) => {
    setSkills(skills.map((skill) => skill.row == row ? { ...skill, open: true} : { ...skill, open: false}));
    console.log(row);
  }


  return (
    <div className='App'>
      <Arrow />
      <Header />
      <About />
      <Experience skills={skills} toggleSkills={toggleSkills} />
      <Contact />
    </div>
  )
}

export default App;

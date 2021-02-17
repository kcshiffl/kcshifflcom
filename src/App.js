import React, { useState } from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Arrow from './components/General/Arrow'
import { FaChevronDown } from 'react-icons/fa'
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';



const App = () => {

  /** Iterating through skills in Experience section */
  const [skills, setSkills] = useState([
    { row: 1,
      name: 'Languages',
      open: true,
      highlight: true,
    },

    { row: 2,
      name: 'Environments',
      open: false,
      highlight: false,
    },

    { row: 3,
      name: 'Applications',
      open: false,
      highlight: false,
    },
  ])

  /** Opening and closing Experience section tabs **/

  const toggleHighlight = (row) => {
    setSkills(skills.map((skill) => skill.row == row ?
        { ...skill, highlight: true}
        : { ...skill, highlight: false}));
  }

  const toggleOpen = (row) => {
    setSkills(skills.map((skill) => skill.row == row ?
        { ...skill, open: true, highlight: true}
        : { ...skill, open: false, highlight: false}));
  }

  const toggleClose= (row) => {
    setSkills(skills.map((skill) => skill.row == row && !skill.open ?
        { ...skill, highlight: false}
        : { ...skill}));
  }


  return (
    <div className='App'>
      <div class='email-overlay'>kcshiffl@gmail.com</div>

      <Header />
      <div id='about'></div>
      <About />

      <div id='experience' style={{ paddingTop: '7%' }}></div>
      <div class='titles' style={{paddingLeft: '32%'}}>Experience</div><div class='line'></div>
      <Experience skills={skills} toggleHighlight={toggleHighlight} toggleOpen={toggleOpen} toggleClose={toggleClose} />

      <div id='work' style={{ paddingTop: '7%' }}></div>
      <div class='titles' style={{paddingLeft: '22%'}}>Work</div>
      <Work />

      <div id='contact' style={{ paddingTop: '7%' }}></div>
      <div class='titles' style={{paddingLeft: '30%'}}>Want to talk?</div>
      <Contact />
    </div>
  )
}

export default App;

import TitleCard from './TitleCard'
import AboutMe from './AboutMe'
import { FaChevronDown } from 'react-icons/fa'

const About = () => {
  return (
    <div>
      <div className='abt'>
      <TitleCard />
      <AboutMe />
      </div>
      <FaChevronDown className='downArrow' />
    </div>
  )
}

export default About

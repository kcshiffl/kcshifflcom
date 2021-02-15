import Skill from './Skill'
import { FaChevronDown } from 'react-icons/fa'

const Experience = () => {
  return (
    <div className='exp'>
      <p>Experience</p>
      <Skill name='Languages' />
      <Skill name='Environments' />
      <Skill name='Applications' />
      <FaChevronDown className='downArrow' />
    </div>
  )
}

export default Experience

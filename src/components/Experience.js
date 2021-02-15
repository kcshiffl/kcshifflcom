import Skill from './Skill'
import { FaChevronDown } from 'react-icons/fa'

const Experience = () => {
  return (
    <div className='exp'>
      <div className='exp-block'>Experience</div>
      <div className='exp-block'>
        <Skill name='Languages' />
        <Skill name='Environments' />
        <Skill name='Applications' />
      </div>
      <FaChevronDown className='downArrow' />
    </div>
  )
}

export default Experience

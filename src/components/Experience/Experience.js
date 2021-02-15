import Skill from './Skill'
import { FaChevronDown } from 'react-icons/fa'

const Experience = () => {
  return (
  <div>
    <div className='exp'>
      <div className='exp-block'>
      <p align='center'>Experience</p>
        <table>
          <tr><Skill name='Languages'/></tr>
          <tr><Skill name='Environments'/></tr>
          <tr><Skill name='Applications'/></tr>
        </table>
      </div>
    </div>
  <FaChevronDown className='downArrow' align='center'/>
  </div>
  )
}

export default Experience

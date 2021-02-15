import { FaGripLines } from 'react-icons/fa'

const Skill = ({ name, items }) => {
  return (
    <div className='exp-skills'>
      <p className='exp-skills'>{name}</p>
      <FaGripLines className='downArrow' align='center' />
    </div>

  )
}

export default Skill

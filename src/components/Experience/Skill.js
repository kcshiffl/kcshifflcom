import SkillButton from './SkillButton'

const Skill = ({ name, items }) => {
  return (
    <div className='exp-btn-block'>
      <p className='exp-scrollbar'></p>
      <SkillButton text={name} />
    </div>

  )
}

export default Skill

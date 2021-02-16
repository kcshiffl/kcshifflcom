import SkillButton from './SkillButton'

const highlighted = false;

const Skill = ({ rowNum, skill, items, toggleSkills }) => {
  return (
    <div className='exp-btn-block' onClick={() => toggleSkills(skill.row)} onMouseOver={() => toggleSkills(skill.row)}>
      <p className={skill.open ? 'exp-scrollbar-highlight' : 'exp-scrollbar' }></p>
      <SkillButton text={skill.name} highlighted={skill.open}/>
    </div>

  )
}

export default Skill

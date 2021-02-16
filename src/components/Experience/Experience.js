import Skill from './Skill'

/**
<Skill rowNum='1'
  name='Languages'
  skillRowNum={skillRowNum}
/>
<Skill rowNum='2'
  name='Environments'
  skillRowNum={skillRowNum}
/>
<Skill rowNum='3'
  name='Applications'
  skillRowNum={skillRowNum}
/>
**/

const Experience = ( {skills, toggleSkills} ) => {


  return (
  <div>
    <div className='exp'>
      <div className='exp-block'>
        {skills.map((skill, index) => (
          <Skill rowNum={index} skill={skill} toggleSkills={toggleSkills} />
        ))}
      </div>

      <div className='exp-block' style={{ width: '100%' }}>
      <p> put stuff here </p>
      </div>

    </div>
  </div>
  )
}

export default Experience

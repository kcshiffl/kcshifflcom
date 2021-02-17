import Languages from './Skills/Languages';
import Environments from './Skills/Environments';
import Applications from './Skills/Applications';

function showSkill( skill ) {
    if (skill.row == 1 && skill.open) return (<Languages />);
    else if (skill.row == 2 && skill.open) return (<Environments />);
    else if (skill.row == 3 && skill.open) return (<Applications />);
}

const SkillList = ( {skills} ) => {
  return (
    <>
    {skills.map((skill, index) =>
      <>{showSkill(skill)}</>
    )}
    </>
  )
}

export default SkillList

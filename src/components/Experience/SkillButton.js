const SkillButton = ({ text, link, highlighted }) => {
  return (
      <button className={highlighted ? 'exp-btn-highlight' : 'exp-btn'}> {text} </button>
  )
}

export default SkillButton

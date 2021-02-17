import { FaCaretRight } from 'react-icons/fa';

const Environments = () => {
  return (
    <div>
      <div style={{float: 'left', paddingRight: '75px'}} >
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />Github</div>
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />Visual Studio</div>
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />Android Studio</div>
      </div>

      <div style={{float: 'left', paddingRight: '75px'}}>
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />JUnit</div>
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />JGrasp</div>
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />Eclipse</div>
      </div>
    </div>
  )
}

export default Environments

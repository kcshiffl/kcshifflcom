import Button from './Button'
const AboutMe = () => {
  return (
    <div className='abt-greeting'>
      <p>Hello,</p>
      <p className='abt-name'>I'm Kimberly Shifflett.</p>
      <p className='abt-text'>
      I'm a recent George Mason University graduate with a BS in Computer Science
      and a Minor in Computer Game Design.</p>
      <Button text='Contact Me' link='#Contact' />
    </div>
  )
}

export default AboutMe

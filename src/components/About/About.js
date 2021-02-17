import TitleCard from './TitleCard'
import AboutMe from './AboutMe'
import Arrow from '../General/Arrow'

const About = () => {
  return (
    <div>
      <div className='abt'>
        <TitleCard />
        <AboutMe />
      </div>
      <a href='#experience'><Arrow /></a>
    </div>
  )
}

export default About

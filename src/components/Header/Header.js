import PropTypes from 'prop-types'
import Button from '../General/Button'
import HeaderLink from './HeaderLink'
import resume from '../images/KShifflett_Resume.pdf';

const Header = () => {

  return(
    <div>
      <header className='header'>
        <HeaderLink link='#about' text='About' num='01'/>
        <HeaderLink link='#experience' text='Experience' num='02' />
        <HeaderLink link='#projects' text='Projects' num='03'/>
        <HeaderLink link='#contact' text='Contact' num='04' />
        <Button text='Resume' link={resume} newTab='true' />
      </header>
    </div>
  )
}

export default Header

import PropTypes from 'prop-types'
import Button from '../General/Button'
import HeaderLink from './HeaderLink'
import resume from '../images/KShifflett_Resume.pdf';

const Header = () => {

  return(
    <div>
      <header className='header'>
        <HeaderLink link='#about' text='About' />
        <HeaderLink link='#experience' text='Experience' />
        <HeaderLink link='#work' text='Work' />
        <HeaderLink link='#contact' text='Contact' />
        <Button text='Resume' link={resume} newTab='true' />
      </header>
    </div>
  )
}

export default Header

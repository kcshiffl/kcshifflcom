import PropTypes from 'prop-types'
import Button from './Button'
import HeaderLink from './HeaderLink'
const Header = () => {
  return(
    <div>
      <header className='header'>
        <HeaderLink link='#about' text='About' />
        <HeaderLink link='#experience' text='Experience' />
        <HeaderLink link='#work' text='Work' />
        <HeaderLink link='#contact' text='Contact' />
        <Button text='Resume'/>
      </header>
    </div>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

//const headingStyle = {
//  color: 'red',
//  backgroundColor : 'black'
//}

export default Header

import PropTypes from 'prop-types'

const Button = ({ text, link, newTab }) => {

  return (
    <a href={link} target={newTab=='true' ? '_blank' : '_self'}><button className='btn'>{text}</button></a>
  )
}

Button.defaultProps = {
  text: '',
  link: ''
}

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string
}

export default Button

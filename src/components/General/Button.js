import PropTypes from 'prop-types'

const Button = ({ text, link }) => {
  return (
    <button className='btn'> {text} </button>
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

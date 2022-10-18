import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({ buttonText }) => {
  return (
    <button className="mainbutton"><FontAwesomeIcon icon="coffee" className='buttonicon' />{buttonText}</button>
  )
}

Button.defaultProps = {
    buttonText: 'Click me',
}

export default Button
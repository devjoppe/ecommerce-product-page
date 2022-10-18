import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let mainButton = 'mainbutton ';

const Button = ({ buttonText, buttonWidth, buttonIcon, buttonType }) => {
  return (
    <button style={{width: buttonWidth}} className={buttonType}><FontAwesomeIcon icon={buttonIcon} className='buttonicon' />{buttonText}</button>
  )
}

Button.defaultProps = {
    buttonText: 'Click me',
}

export default Button
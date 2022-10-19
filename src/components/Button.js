import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({ buttonText, buttonWidth, buttonIcon, buttonType, clickFunction }) => {
  return (
    <button onClick={clickFunction} style={{width: buttonWidth}} className={buttonType}><FontAwesomeIcon icon={buttonIcon} className='buttonicon' />{buttonText}</button>
  )
}

Button.defaultProps = {
    buttonText: 'Click me',
}

export default Button
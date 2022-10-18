const Button = ({ buttonText }) => {
  return (
    <button className="mainbutton">{buttonText}</button>
  )
}

Button.defaultProps = {
    buttonText: 'Click me',
}

export default Button
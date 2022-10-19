import Button from "./Button"

const Amountbuttons = () => {
  return (
    <div className="cartamount">
        <Button buttonType={'mainbutton grey-button'} buttonText={'-'} buttonWidth={'48px'} />
        <div className="amount"><span>0</span></div>
        <Button buttonType={'mainbutton grey-button'} buttonText={'+'} buttonWidth={'48px'} />
    </div>
  )
}

export default Amountbuttons
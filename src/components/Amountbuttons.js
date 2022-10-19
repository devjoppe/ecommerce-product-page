import Button from "./Button"

let itemNumber = 0;

const Amountbuttons = () => {

  const showAlert = () => {
    console.log("Hejsan");
  }

  return (
    <div className="cartamount">
        <Button clickFunction={showAlert} buttonType={'mainbutton grey-button'} buttonText={'-'} buttonWidth={'48px'} />
        <div className="amount"><span>{itemNumber}</span></div>
        <Button buttonType={'mainbutton grey-button'} buttonText={'+'} buttonWidth={'48px'} />
    </div>
  )


}

export default Amountbuttons
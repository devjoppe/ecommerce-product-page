import Button from "./Button";
import Amountbuttons from "./Amountbuttons";

const Addtocartbar = () => {
  return (
    <div className="addproduct">
        <Amountbuttons></Amountbuttons>
        <Button buttonType={'mainbutton red-button'} buttonText={'Add to cart'} buttonWidth={'100%'} buttonIcon={'cart-shopping'} />
    </div>
  )
}

export default Addtocartbar
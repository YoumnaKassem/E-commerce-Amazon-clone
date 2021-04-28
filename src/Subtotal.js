import './subtotal.css'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'


function Subtotal() {
  const [{basket}, dispatch] = useStateValue()
  return (
    <div className="subtotal">
    	<div className='subtotal-to-checkout'>
	      <span> Subtotal (</span>{basket.length}<span> items) : </span>
	  		{getBasketTotal(basket)}<strong>$</strong>
	  	</div>
	  	<div className='gift-part'>
	  		<input className='gift-checkbox' type='checkbox' />
	  		<span>This order contains a gift </span>
	  	</div>
	    <button className='checkout-button'> Proceed to check out </button>

    </div>
  );
}

export default Subtotal;
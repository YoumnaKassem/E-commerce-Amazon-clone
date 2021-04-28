import './checkout.css'
import Subtotal from './Subtotal'
import ShoppingBasketProduct from './ShoppingBasketProduct'
import { useStateValue } from './StateProvider'

function Checkout() {
  const [{basket}, dispatch] = useStateValue()

  return (
    <div className="checkout">
      <div className='checkout-left'>
      	<img className='image-ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='image' />
      	<h2 className='title'>Your Shopping Basket </h2>
      	{
      		basket.map(item=>(<ShoppingBasketProduct item={item} />))
      	}


      </div>
      <div className='checkout-right'>
      	<Subtotal />
      </div>

    </div>
  );
}

export default Checkout;
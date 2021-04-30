import './payment.css'
import { useStateValue } from './StateProvider'
import ShoppingBasketProduct from './ShoppingBasketProduct'
import { Link } from 'react-router-dom'
function Payment() {
  const [{basket, user}, dispatch] = useStateValue()
  return (
    <div className="payment">
      	<div className='payment-container'>
      		<h1 className='title'>Checkout ( <Link to ='/checkout'>{basket?.length} items</Link> )</h1>
      		<div className='payment-section'>
      			<div className='left-side'>
      				<h3>Delievery Address</h3>
      			</div>
      			<div className='right-side'>
      				<p>{user?.email}</p>
      				<p>cairo</p>
      				<p>Egypt</p>
      			</div>
      		</div>
      		<div className='payment-section'>
      			<div className='left-side'>
      				<h3>Review items and delivery</h3>
      			</div>
      			<div className='right-side'>
      			{basket.map(item=>(<ShoppingBasketProduct item={item}/>))}
      			</div>
      		</div>
      		<div className='payment-section'>
      			<h3 className='left-side'>Payment Method</h3>
      		</div>


      	</div>

    </div>
  );
}

export default Payment;
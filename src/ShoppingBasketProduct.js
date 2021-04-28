import './shoppingBasketProduct.css'
import { useStateValue } from './StateProvider'
function ShoppingBasketProduct({item}) {	
  const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
    	console.log('fire event remove from basket, running dispatch function soon')
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: item.id,
        })
    }
  return (
    <div className="shoppingCardproduct">
      <img className='shoppingCardproduct-image' src={item.image} alt='product image'/>
      <div className='shoppingCardproduct-info'>
      	<h5 className='shoppingCardproduct-title'>{item.title}</h5>
      	<h3>{item.price}</h3>
      	<div className='shoppingCardproduct-rating'>
      		{Array(item.rating).fill().map(()=>(
      			<p>🌟</p>))}
      	</div>
      	<button onClick={removeFromBasket} className='shoppingCardproduct-button'>Remove from basket</button>
      </div>

    </div>
  );
}

export default ShoppingBasketProduct;
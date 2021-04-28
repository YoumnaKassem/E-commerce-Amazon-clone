import './product.css'
import { useStateValue } from './StateProvider'
function Product({id, title, price, rating, image}) {
  const [{basket}, dispatch] = useStateValue()	
  console.log("this is the basket from state", basket);
  const addToBasket = () =>{
  	dispatch({
  		type: 'ADD_TO_BASKET',
  		item: {
  			id:id,
  			title:title,
  			image:image,
  			rating:rating,
  			price:price
  		}
  	})
  }
  	
  return (
    <div className="product">
    	<div className='product-info'>

    		<p>{title}</p>
    		<p className='product-price'>
    			<small>$</small>
    			<strong>{price}</strong>
    		</p>
    		<div className='product-rating'>
    			<p>{rating}</p>
    			
    		</div>

    	</div>
    	<img className='product-img' src={image} alt='product picture' />
    	<button onClick={addToBasket} className='addtocart-button'>add to basket </button>

      

    </div>
  );
}

export default Product;
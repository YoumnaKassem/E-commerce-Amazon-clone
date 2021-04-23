import './product.css'
function Product({title, price, rating, image}) {
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
    	<button className='addtocart-button'>add to basket </button>

      

    </div>
  );
}

export default Product;
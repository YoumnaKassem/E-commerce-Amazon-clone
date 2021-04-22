import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './header.css'
function Header() {
  return (
    <div className="header">
      
      <img className='logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='Amazon Logo' />
      
      <div className='search'>
      	<input type='text' className='searchbox'/>
      	<SearchIcon className='search-icon' />
      </div >
      <div className='header-nav-options'>
      	<div className='option'>
      		<span className='option-line-one'>Hello!</span>
      		<span className='option-line-two'>Sign in</span>
      	</div>
      	<div className='option'>
      		<span className='option-line-one'>Returns</span>
      		<span className='option-line-two'>&Orders</span>
      	</div>
      	<div className='option'>
      		<span className='option-line-one'>Your</span>
      		<span className='option-line-two'>Prime</span>
      	</div>
      	<div className='option-basket'>
      		<ShoppingBasketIcon />
      		<span className='option-line-two basket-count'>0</span>
      	</div>
      </div>
    </div >
  );
}

export default Header;
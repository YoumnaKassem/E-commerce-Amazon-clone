import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider' 
import {Link } from 'react-router-dom'
import { auth } from './firebase'
import './header.css'
function Header() {
  const [{basket, user}, dispatch] = useStateValue()
  const handleUserLogin = ()=>{
  	auth.signOut();
  }

  return (
    <div className="header">
      <Link to='/'>
      	<img className='logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='Amazon Logo' />
      </Link>
      <div className='search'>
      	<input type='text' className='searchbox'/>
      	<SearchIcon className='search-icon' />
      </div >
      <div className='header-nav-options'>
      	<Link to={!user && '/signIn'}>
	      	<div onClick={handleUserLogin} className='option'>
	      		<span className='option-line-one'>Hello {user?user.email:'Guest'}</span>
	      		<span className='option-line-two'>{user? 'Sign out' : 'Sign in' }</span>
	      	</div>
	    </Link>
      	<div className='option'>
      		<span className='option-line-one'>Returns</span>
      		<span className='option-line-two'>&Orders</span>
      	</div>
      	<div className='option'>
      		<span className='option-line-one'>Your</span>
      		<span className='option-line-two'>Prime</span>
      	</div>
      	<Link to='/checkout' >
      		<div className='option-basket'>
      			<ShoppingBasketIcon />
      			<span className='option-line-two basket-count'>{basket.length}</span>
      		</div>
      	</Link>
      </div>
    </div >
  );
}

export default Header;
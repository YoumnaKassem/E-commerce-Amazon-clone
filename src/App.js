
import './App.css';
import Header from './Header'
import Home from './Home'
import { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Payment from './Payment'


function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(()=>{
  	auth.onAuthStateChanged(authUser=>{
  		console.log('user', authUser)
  		if (authUser){
  			dispatch({
  				type:'SET_USER',
  				user:authUser
  			})
  		}
  		else{
  			dispatch({
  				type:'SET_USER',
  				user:null
  			})
  		}
  	})
  }, [])
  return (
  	<Router>
	    <div className="App">
	      
	   	  <Switch> 
	   	  	  <Route path='/signIn'>
	   	  	  	<Login />
	   	  	  </Route>
		      <Route path='/checkout'>
		      	<Header />
		      	<Checkout />
		      </Route>
		      <Route path='/payment'>
		      	<Header />
		      	<Payment />
		      </Route>
		      <Route path='/'>
		      	<Header />
		      	<Home />
		      </Route>
	      </Switch>
	    </div>
    </Router>

   
  );
}

export default App;

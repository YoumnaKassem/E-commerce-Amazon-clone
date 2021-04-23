
import './App.css';
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
  	<Router>
	    <div className="App">
	      <Header />
	   	  <Switch> 
		      <Route path='/checkout'>
		      	<h1>I'm here at checkout</h1>
		      </Route>
		      <Route path='/'>
		      	<Home />
		      </Route>
	      </Switch>
	    </div>
    </Router>

   
  );
}

export default App;

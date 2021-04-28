import './login.css'
import { useState } from 'react'
import {Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (e) =>{
  	e.preventDefault();
  	auth
  	.signInWithEmailAndPassword(email, password)
  	.then(auth=>{
  		if (auth){
  			history.push('/')
  		}
  	})

  }
  const register = e=>{
  	e.preventDefault();
  	auth
  	.createUserWithEmailAndPassword(email, password)
  	.then(auth=>{
  		if(auth){
  			history.push('/')
  		}
  	})
  	.catch(error=>alert(error.message))
  }
  return (
    <div className="login">
      <Link to='/'>
      	<img class='login-logo' src='https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png' alt='Amazon Logo' />
      </Link>
      <div className='login-container'>
	      <form className='login-form'>
	      	<h1>Sign-in</h1>
	      	<h5 className='email'>E-mail</h5>
	      	<input className='input-email' type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
	      	<h5 className='pass'>Password</h5>
	      	<input className='input-pass' type='password' value={password} onChange={e=>setPassword(e.target.value)} />
	      	<h1></h1>
	      	<button type='submit' onClick={signIn} className='button-signin'>Sign In</button>
	      </form>
	      <p>by signing in you agree to (fake :)) amazon's conditions of use & sale. Please see our privacy Notice, our Cookies Notice and our Interest-based ads Notice.</p>
	      <button onClick={register} className='signup-button'>Create your amazon acount </button>
	  </div>
      
    </div>
  );
}

export default Login;
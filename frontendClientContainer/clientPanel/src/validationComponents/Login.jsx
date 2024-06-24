import React from 'react'
import '../validationComponents/Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='loginContainer container-fluid row vh-100 ' >
      <div className='leftCol col-8 d-flex flex-column justify-content-center align-items-center '>
          <h1 className='leftTitle '>Login to Your Account</h1>
          <input className='loginInput mt-4' type='email' placeholder='Email' required  />
          <input className='loginInput mt-3 mb-4' type='password' placeholder='Password' required  />
          <button className='logSignIn'>Sign in</button>
      </div>


      <div className='rightCol col d-flex flex-column justify-content-center align-items-center text-white'>
          <h1 className='rightTitle'>New Here?</h1>
          <hr/>
          <div className='logpharagh'>
            <p className='rightParagh'>Sign up and discover a great </p>
            <p className='rightParagh' >amount of new opportunitiest!</p>
          </div>
          
          <Link to={'/register'} className='logSignUp rounded-5 '>Sign Up</Link>
          
      </div>
    </div>
  )
}

export default Login
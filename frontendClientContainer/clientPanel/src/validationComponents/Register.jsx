import React from 'react'
import '../validationComponents/Register.css';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className='RegisterContainer container-fluid row vh-100 ' >
       <div className='leftRegCol col d-flex flex-column justify-content-center align-items-center text-white'>
          <h1 className="leftRegTitle">Welcome Back!</h1>
          <hr/>
          <div className='regpharagh'>
            <p className='leftRegParagh'>To keep connected with us please</p>
            <p className='leftRegParagh'>login with your personal info</p>
          </div>

          <Link to='/' className='regSignin rounded-5'>Sign in</Link>

       </div>

       <div className='rightRegCol col-8 d-flex flex-column justify-content-center align-items-center'>
          <h1 className='rightregTitle'>Create Account</h1>
          <div className='d-flex row justify-content-center align-items-center'>    
                <input className='reginInput mt-4' type='text' placeholder='FullName' required  />
                <input className='reginInput mt-4' type='email' placeholder='Email' required  />
                <select className='regSection mt-4'>
                    <option className='regOption'>Gender</option>
                    <option className='regOption'>Male</option>
                    <option className='regOption'>Female</option>
                </select>
                <input className='reginInput mt-4 mb-4' type='text' placeholder='PhoneNumber' required  />
                <input className='reginInput mt-4 mb-4' type='password' placeholder='Password' required  />
                <input className='reginInput mt-4 mb-4' type='text' placeholder='Address' required  />
          </div> 
          <button className='regSignup'>Sign up</button>
       </div> 
    </div>
  )
}

export default Register
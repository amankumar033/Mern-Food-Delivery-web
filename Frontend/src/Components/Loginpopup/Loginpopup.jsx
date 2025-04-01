import React, { useState } from 'react'
import { assets } from '../../assets/assets';
import './Loginpopup.css'
const Loginpopup = ({setshowlogin}) => {
  const [showstate,setshowstate] =useState('Sign Up')
  return (
    <div className="loginpopup-container">

        <form className='loginpopup-form'>
            <div className="loginpopup-head">
        <h3>{showstate}</h3>
        <img src={assets.cross_icon} onClick={()=>{setshowlogin(false)}} />
                </div>
        <div className="loginpopup-inputs">
          {showstate==='Sign Up'?<input type="text" placeholder='Your name' />:''}
            <input type="text" placeholder='Your email' />
            <input type="password" placeholder='Password' />
            <button>{showstate==='Sign Up'?'Create Account':'Login'}</button>
            </div>
            <div className="loginpopup-condition">
            <input type="checkbox" />
            <p className='loginpopup-text'>By continuing , i agree to the terms of use & privacy policy.</p>
            </div>
            {showstate==='Sign Up'?<p className='loginpopup-info'>Already have an account? <span className='loginpopup-state' onClick={()=>{setshowstate('Login')}}>Login here</span></p>:<p className='loginpopup-info'>Create a new account? <span className='loginpopup-state' onClick={()=>{setshowstate('Sign Up')}}>Click here</span></p>}
        
        
        
      
        </form>
    </div>

  )
}

export default Loginpopup
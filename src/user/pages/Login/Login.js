import React from 'react'
import './Login.scss'
import TextField from '@mui/material/TextField';
import imga from '../../../assets/elder.jpg'

export default function Login() {
  return (
    <div className=' login'> 
      <div className=' container shadow loginin'>
      <img className='imagine' src={imga} alt ="somet" /> 
      <div className='loginpart'>
        
        <h3>MED<span className='care'>CARE</span></h3> 
        <br/>
        <TextField 
          size="normal"  className='logininput'
          required label="email-id"
          variant="outlined" 
          />
        <br/>
        <TextField className='logininput'
            size='normal' required
            label="Password"
            type="password"
          /> 
        <br/>
        
        <button className='loginbutton'>LOGIN</button> 
        <br/>
        <h6 className='loginnew'> New User?Sign Up</h6>
      </div>
      </div>
      
        
    </div>
  )
}

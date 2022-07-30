
import imga from "../../../assets/no heart.jpg";
import TextField from '@mui/material/TextField';
import './doctorlogin.scss';

function Doctorlogin() {
  return (
    <div className=' login'> 
      <div className=' container shadow loginin'>
      <img className='imagine' src={imga} alt ="somet" /> 
      <div className='loginpart'>
        
        <h3 className='logintext'> MED<span className='care'>CARE</span></h3> 
        <br/>
        <TextField 
          size="normal"  className='logininput'
          required label="Doctor-id"
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

      </div>
      </div>
      
        
    </div>
  );
}

export default Doctorlogin;

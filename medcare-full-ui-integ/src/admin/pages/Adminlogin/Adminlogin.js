import Box from '@mui/material/Box';
import './Adminlogin.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';

function Adminlogin() {
  return (
    <div className="adminlog">
      <div className='container shadow mainbox'>
        <Box className='row1'>
          <AccountCircleIcon className='row11' color="primary" size='larger' sx={{ fontSize: 80 }} />
          <h1 className='row12'> Admin</h1>
        </Box>
        <div className='row2'>
          <TextField
            className='row21'
            label="Admin-id"
            variant="outlined"
          />
        </div>
        <div className='row3'>
          <TextField
            className='row31'
            label="password"
            variant="outlined"
            type='password'
          />
        </div>
        <div className='row4'>
        <button className='row41'>
        <Link className="link" to='/admin/dashboard'>LOGIN</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Adminlogin;


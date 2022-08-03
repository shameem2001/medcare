
import './Dashboard.scss';
import {Link} from 'react-router-dom';

function Dash_board() {
  return (
      <div className='fullpage' >
        <div className='mainpart'>
            <div className='rightpart'>
             <div className='divtable' >
               <table className="table">
                <thead>
                  <tr>
                    <th>Doctor-id</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Email</th>
                    <th>Phone number</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1234</td>
                    <td>Aswin</td>
                    <td>Neurosurgeon</td>
                    <td>aswin989@gmail.com</td>
                    <td>9876543210</td>
                    <th> <button className='btn actionbutton'>Remove</button> </th>
                  </tr>
                  <tr>
                    <td>1234</td>
                    <td>Aswin</td>
                    <td>Neurosurgeon</td>
                    <td>aswin989@gmail.com</td>
                    <td>9876543210</td>
                    <th> <button className='btn actionbutton'>Remove</button> </th>
                  </tr>
                  
                  <tr>
                    <td>1234</td>
                    <td>Aswin</td>
                    <td>Neurosurgeon</td>
                    <td>aswin989@gmail.com</td>
                    <td>9876543210</td>
                    <th> <button className='btn actionbutton'>Remove</button> </th>
                  </tr>
                  <tr>
                    <td>1234</td>
                    <td>Aswin</td>
                    <td>Neurosurgeon</td>
                    <td>aswin989@gmail.com</td>
                    <td>9876543210</td>
                    <th> <button className='btn actionbutton'>Remove</button> </th>
                  </tr>
                  <tr>
                    <td>1234</td>
                    <td>Aswin</td>
                    <td>Neurosurgeon</td>
                    <td>aswin989@gmail.com</td>
                    <td>9876543210</td>
                    <th> <button className='btn actionbutton'>Remove</button> </th>
                  </tr>
                </tbody>
                
               </table>
             </div>
             <div className='bottompart'><button className='btn leftbutton'><Link className='link' to='/admin/add-doctor'>ADD DOCTOR</Link></button></div>
            </div>
        </div>
        
      </div>
  );
}

export default Dash_board;

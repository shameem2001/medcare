
import './Dashboard.scss';

function Dash_board() {
  return (
      <div className='fullpage' >
        <div className='header'>
            <div className='c1'>MED<div className='c11'>CARE</div></div>
            <div className='c2'>
              
              Admin Dashboard
              <div className='c21'>Log out</div>
            </div>
            
        </div>
        <div className='mainpart'>
            <div className='rightpart'>
             <div className='divtable' >
               <table>
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
                    <th> <button className='actionbutton'>Remove</button> </th>
                  </tr>
                  <tr>
                    <td>1234</td>
                    <td>Aswin</td>
                    <td>Neurosurgeon</td>
                    <td>aswin989@gmail.com</td>
                    <td>9876543210</td>
                    <th> <button className='actionbutton'>Remove</button> </th>
                  </tr>
                  
                  <tr>
                    <td>1234</td>
                    <td>Aswin</td>
                    <td>Neurosurgeon</td>
                    <td>aswin989@gmail.com</td>
                    <td>9876543210</td>
                    <th> <button className='actionbutton'>Remove</button> </th>
                  </tr>
                  <tr>
                    <td>1234</td>
                    <td>Aswin</td>
                    <td>Neurosurgeon</td>
                    <td>aswin989@gmail.com</td>
                    <td>9876543210</td>
                    <th> <button className='actionbutton'>Remove</button> </th>
                  </tr>
                  <tr>
                    <td>1234</td>
                    <td>Aswin</td>
                    <td>Neurosurgeon</td>
                    <td>aswin989@gmail.com</td>
                    <td>9876543210</td>
                    <th> <button className='actionbutton'>Remove</button> </th>
                  </tr>
                </tbody>
                
               </table>
             </div>
             <div className='bottompart'><button className='leftbutton'> ADD DOCTOR</button></div>
            </div>
        </div>
        
      </div>
  );
}

export default Dash_board;

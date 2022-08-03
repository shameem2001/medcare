import React from 'react';
import {Link} from 'react-router-dom';
import './AdminHeader.scss';

export default function AdminHeader(){
    return (
        <div className='shadow-sm header'>
            <div className='c1'>MED<span className='c11'>CARE</span></div>
            <div className='c2'>
              Admin Dashboard
              <div className='c21'><Link className='link-logout' to='/admin/login'>LOG OUT</Link></div>
            </div>
        </div>
    );
}
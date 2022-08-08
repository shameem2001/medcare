import React from 'react';
import {useNavigate} from 'react-router-dom';
import './AdminHeader.scss';

export default function AdminHeader(){
    const navigate = useNavigate();

    const logout = ()=>{
        localStorage.removeItem("admin_name");
        localStorage.removeItem("admin_id");
        navigate("/admin/login");
    }

    let admin = "admin";
    admin = localStorage.getItem("admin_name");

    return (
        <div className='shadow-sm header'>
            <div className='c1'>MED<span className='c11'>CARE</span></div>
            <div className='c2'>
              {admin}
              <div className='c21' onClick={logout}>LOG OUT</div>
            </div>
        </div>
    );
}
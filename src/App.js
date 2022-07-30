import React from 'react'
import './app.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from "./user/pages/HomePage/Home.js";
import DoctorList from './user/pages/DoctorList/DoctorList.js';
import Profile from './user/pages/ProfilePage/Profile';
import Login from './user/pages/Login/Login.js';
import Register from './user/pages/Register/Register.js';
import DashBoard from './admin/pages/Dashboard/Dashboard.js';
import Adminlogin from './admin/pages/Adminlogin/Adminlogin.js';
import AddDoctor from './admin/pages/Adddoctor/Adddoctor.js';
import DoctorLogin from './doctor/pages/doctorlogin/doctorlogin.js';

export default function Medcare() {
  return (
      <BrowserRouter>

          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/doctor-list" element={<DoctorList />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/dashboard" element={<DashBoard/>} />
              <Route path="/add-doctor" element={<AddDoctor />} />
              <Route path="/admin-login" element={<Adminlogin />}  />
              <Route path="/doctor-login" element={<DoctorLogin />} />
            </Routes>
            <Footer />
          </div>
          
      </BrowserRouter>

  );
}

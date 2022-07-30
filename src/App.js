import React from 'react'
import './app.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from "./user/pages/HomePage/Home.js";
import DoctorList from './user/pages/DoctorList/DoctorList.js';
import DoctorDetails from "./user/pages/DoctorDetails/DoctorDetails.js";
import Profile from './user/pages/ProfilePage/Profile';
import Login from './user/pages/Login/Login.js';
import Register from './user/pages/Register/Register.js';

export default function Medcare() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctor-list" element={<DoctorList />} />
          <Route path="/doctor-details" element={<DoctorDetails />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

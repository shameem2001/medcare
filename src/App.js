import React from 'react'
import './app.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './user/pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import DoctorList from './user/pages/DoctorList';
import Profile from './user/pages/Profile';

export default function Medcare() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor-list" element={<DoctorList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

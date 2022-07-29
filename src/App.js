import React from 'react'
import './app.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './user/pages/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Choose from './user/pages/DoctorDetails/Choose.js';

export default function Medcare() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Choose/>} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

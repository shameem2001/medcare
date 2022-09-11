import React from "react";
import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/User/Header/Header.js";
import Footer from "./components/User/Footer/Footer.js";
import Home from "./user/pages/HomePage/Home.js";
import DoctorList from "./user/pages/DoctorList/DoctorList.js";
import DoctorDetails from "./user/pages/DoctorDetails/DoctorDetails.js";
import Profile from "./user/pages/ProfilePage/Profile";
import Login from "./user/pages/Login/Login.js";
import Register from "./user/pages/Register/Register.js";
import Dashboard from "./admin/pages/Dashboard/Dashboard";
import Adddoctor from "./admin/pages/Adddoctor/Adddoctor";
import Adminlogin from "../src/admin/pages/Adminlogin/Adminlogin";
import Doctorlogin from "../src/doctor/pages/doctorlogin/doctorlogin";
import AppointmentList from "../src/doctor/pages/AppointmentList/AppointmentList";
import DoctorHeader from "./components/Doctor/Header/DoctorHeader";
import PatientDetails from "../src/doctor/pages/PatientDetails/Patient_details";
import AdminHeader from "./components/Admin/Header/AdminHeader";
import DoctorFooter from "./components/Doctor/Footer/DoctorFooter";
import AdminFooter from "./components/Admin/Footer/AdminFooter";

export default function Medcare() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/register" element={<Header />} />
          <Route path="/login" element={<Header />} />
          <Route path="/doctor-list" element={<Header />} />
          <Route path="/doctor-details" element={<Header />} />
          <Route path="/profile" element={<Header />} />
          <Route path="/doctor/" element={<DoctorHeader />} />
          <Route path="/doctor/patient-details" element={<DoctorHeader />} />
          <Route path="/admin/dashboard" element={<AdminHeader />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctor-list" element={<DoctorList />} />
          <Route path="/doctor-details" element={<DoctorDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/doctor/login" element={<Doctorlogin />} />
          <Route path="/doctor/" element={<AppointmentList />} />
          <Route path="/doctor/patient-details" element={<PatientDetails />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/add-doctor" element={<Adddoctor />} />
          <Route path="/admin/login" element={<Adminlogin />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Footer />} />
          <Route path="/doctor-list" element={<Footer />} />
          <Route path="/doctor-details" element={<Footer />} />
          <Route path="/profile" element={<Footer />} />
          <Route path="/doctor/" element={<DoctorFooter />} />
          <Route path="/admin/" element={<AdminFooter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

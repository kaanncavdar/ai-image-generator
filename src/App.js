import './App.css';
import './components/Navbar/Navbar.css';
import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/pricing';
import ImageGenerator from './components/ImageGenerator/ImageGenerator';
import Login from './components/auth/login';
import Register from './components/auth/register';
import About from './components/About/about';
import Footer from './components/Footer/Footer';
import Help from './components/Help/help';
import Profile from './components/Profile';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ImageGenerator />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/help" element={<Help />} />
        <Route path="/signuplogin" ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;

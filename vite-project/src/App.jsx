import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarapp from './Components/NavBar/NavBar';
import headernew from './Components/Header for Home/header';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import SignUP from './Pages/SignUP';
import Leave from './Pages/Leave'
import LeaveRequest from './Pages/LeaveRequest'
import View from './Pages/View'
import Fillemployeedetails from './Pages/FillEmployeeDetails'
import Profile from './Pages/profile'

// App.js
function App() {

  return (
    <>
    <Router>
      <NavBarapp/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/I'm Employee" element={<SignUP/>} />
        <Route path="/Leave" element={<Leave />} />
        <Route path="Leave Request" element={<LeaveRequest />} />
        <Route path="/FillEmployeeDetails" element={<Fillemployeedetails/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update/:id" element={<LeaveRequest />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </Router>
 </>
  );
}


export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarapp from './Components/NavBar/NavBar';
//import headernew from './Components/Header for Home/header';
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
import CreateUserAccount from './Pages/newLogin'
import Newloginpage from './Pages/createonlyloginpage'
import SuccessPage from './Pages/successfullyaddedemployeepage';

import Dashboard from './Pages/dashboard'
import Dashboard1 from './Pages/Dashboard1'
import LeaveRequestApprovedPart from './Pages/LeaveRequestApprove'
import SupervisorLeaveApprove from './Pages/ApproveLeaveSupervisor'


import GototheCreateAccountPageAfterFillForm from './Pages/newLogin'

import { AuthProvider } from './contexts/AuthContexts';
import PrivateRoute from './contexts/PrivateRoute';

// App.js
function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <NavBarapp />
          <Routes>
            <Route path="/createonlyloginpage" element={<Newloginpage />} />
            <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />

            <Route path='*' element={<Error />} />

            {/* Private test route */}
            <Route element={<PrivateRoute allowedRoles={['1']} />} >
              <Route path="/contact" element={<Contact />} />
            </Route>






            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />

            <Route path="/Error" element={<Error />} />
            <Route path="/I'm Employee" element={<SignUP />} />
            <Route path="/Leave" element={<Leave />} />
            <Route path="Leave Request" element={<LeaveRequest />} />
            <Route path="/FillEmployeeDetails" element={<Fillemployeedetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/newLogin" element={<CreateUserAccount />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/newLogin" element={<GototheCreateAccountPageAfterFillForm />} />
            <Route path="/successfullyaddedemployeepage" element={<SuccessPage />} />

            <Route path="/dashboard1" element={<Dashboard1 />} />
            <Route path="/LeaveRequestApprove" element={<LeaveRequestApprovedPart />} />
            <Route path="/ApproveLeaveSupervisor" element={<SupervisorLeaveApprove />} />


            <Route path="/update/:id" element={<LeaveRequest />} />

            <Route path="/view/:id" element={<View />} />

          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}


export default App;



// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "./AuthContexts";

// const PrivateRoute = ({allowedRoles}) => {
//     const {user} = useAuth();

//     if (!user) {
//         return <Navigate to="/createonlyloginpage" />;
//     }

//     if (allowedRoles && !allowedRoles.includes(user.role_id)) {
//         return <Navigate to="/unauthorized" />;
//     }

//     return <Outlet />;
// }

// export default PrivateRoute;
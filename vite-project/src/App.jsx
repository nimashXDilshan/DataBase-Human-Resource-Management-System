import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarapp from './Components/NavBar/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import SignUP from './Pages/SignUP';
import Leave from './Pages/Leave';
import LeaveRequest from './Pages/LeaveRequest';
import View from './Pages/View';
import Fillemployeedetails from './Pages/FillEmployeeDetails';
import Profile from './Pages/profile';
import CreateUserAccount from './Pages/newLogin';
import Newloginpage from './Pages/createonlyloginpage';
import SuccessPage from './Pages/successfullyaddedemployeepage';
import Dashboard from './Pages/dashboard';
import Dashboard1 from './Pages/Dashboard1';
import LeaveRequestApprovedPart from './Pages/LeaveRequestApprove';
import SupervisorLeaveApprove from './Pages/ApproveLeaveSupervisor';
import AllEmploees from './Pages/AllEmployees';
import { AuthProvider } from './contexts/AuthContexts';
import PrivateRoute from './contexts/PrivateRoute';
import SalaryHistory from './Pages/View_salary';

// App.js
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex">
          <NavBarapp />
          <div className="flex-1 ml-64 p-4"> {/* Adjust for fixed width of the sidebar */}
            <Routes>
              <Route path="/createonlyloginpage" element={<Newloginpage />} />
              <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />
              <Route path='*' element={<Error />} />
              <Route element={<PrivateRoute allowedRoles={['1']} />}>
                <Route path="/contact" element={<Contact />} />
              </Route>
              <Route path="/AllEmployees" element={<AllEmploees />} />
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
              <Route path="/successfullyaddedemployeepage" element={<SuccessPage />} />
              <Route path="/dashboard1" element={<Dashboard1 />} />
              <Route path="/LeaveRequestApprove" element={<LeaveRequestApprovedPart />} />
              <Route path="/ApproveLeaveSupervisor" element={<SupervisorLeaveApprove />} />
              <Route path="/update/:id" element={<LeaveRequest />} />
              <Route path="/view/:id" element={<View />} />
              <Route path="/View_salary" element={<SalaryHistory />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

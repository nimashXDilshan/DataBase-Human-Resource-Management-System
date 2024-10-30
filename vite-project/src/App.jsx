import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarapp from './Components/NavBar/NavBar';
import NavBarHrManager from './Components/NavBar/NavBarHrManager';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Leave from './Pages/Leave';
import LeaveRequest from './Pages/LeaveRequest';
import View from './Pages/View';
import Fillemployeedetails from './Pages/FillEmployeeDetails';
import Profile from './Pages/profile';
import CreateUserAccount from './Pages/newLogin';
import Newloginpage from './Pages/createonlyloginpage';
import SuccessPage from './Pages/successfullyaddedemployeepage';
import Dashboard from './Pages/dashboard';
import LeaveRequestApprovedPart from './Pages/LeaveRequestApprove';
import SupervisorLeaveApprove from './Pages/ApproveLeaveSupervisor';
import AllEmploees from './Pages/AllEmployees';
import { AuthProvider, useAuth } from './contexts/AuthContexts';
import PrivateRoute from './contexts/PrivateRoute';
import SalaryHistory from './Pages/View_salary';
import Reportingmodule from './Pages/ReportingModule';


function AppLayout({ children }) {
  const { user } = useAuth();
  const isRoleOne = user?.role_id === '1';

  return (
    <div className="flex">
      {isRoleOne ? <NavBarHrManager /> : <NavBarapp />}
      <div className="flex-1 ml-64 p-4">{children}</div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppLayout>
          <Routes>
            {/* Routes for role 1 */}
            <Route element={<PrivateRoute allowedRoles={['1']} />}>
              <Route path="/contact" element={<Contact />} />
              <Route path="/AllEmployees" element={<AllEmploees />} />
            </Route>

            {/* Routes accessible by all authenticated users */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Error" element={<Error />} />
            <Route path="/Leave" element={<Leave />} />
            <Route path="/LeaveRequest" element={<LeaveRequest />} />
            <Route path="/FillEmployeeDetails" element={<Fillemployeedetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/newLogin" element={<CreateUserAccount />} />
            <Route path="/successfullyaddedemployeepage" element={<SuccessPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/LeaveRequestApprove" element={<LeaveRequestApprovedPart />} />
            <Route path="/update/:id" element={<LeaveRequest />} />
            <Route path="/view/:id" element={<View />} />
            <Route path="/View_salary" element={<SalaryHistory />} />
            <Route path="/ApproveLeaveSupervisor" element={<SupervisorLeaveApprove />} />
            <Route path='/createonlyloginpage' element={<Newloginpage />} />
            <Route path="/ReportingModule" element={<Reportingmodule />} />

            {/* Catch-all for unknown routes */}
            <Route path="*" element={<Error />} />
          </Routes>
        </AppLayout>
      </Router>
    </AuthProvider>
  );
}

export default App;
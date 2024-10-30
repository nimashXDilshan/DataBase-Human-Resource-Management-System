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
import Profile from './Pages/profile';
import Newloginpage from './Pages/createonlyloginpage';
import Dashboard from './Pages/dashboard';
import SupervisorLeaveApprove from './Pages/ApproveLeaveSupervisor';
import AllEmploees from './Pages/AllEmployees';
import { AuthProvider, useAuth } from './contexts/AuthContexts';
import PrivateRoute from './contexts/PrivateRoute';
import SalaryHistory from './Pages/View_salary';
import Reportingmodule from './Pages/ReportingModule';
import NavBarTop from './Components/NavBar//NavBarTop'; // Adjust import path as necessary




function AppLayout({ children }) {
  const { user } = useAuth();
  const isRoleOne = user?.role_id === '1';
  const isRoleTwoOrThreeOrFour = user?.role_id >= '2' && user?.role_id <= '4';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Conditional Navbar Rendering */}
      {isRoleOne && <NavBarHrManager />}
      {isRoleTwoOrThreeOrFour && <NavBarapp />}
      {!isRoleOne && !isRoleTwoOrThreeOrFour && (
        <NavBarTop />
      )}

      {/* Main Content */}
      <div
        className={`flex-1 ${isRoleOne || isRoleTwoOrThreeOrFour ? 'ml-64' : ''} ${!isRoleOne && !isRoleTwoOrThreeOrFour ? 'mt-10' : ''
          }`}
      >
        {children}
      </div>
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
              <Route path="/AllEmployees" element={<AllEmploees />} />
              <Route path="/ReportingModule" element={<Reportingmodule />} />

            </Route>

            {/* Routes accessible by all authenticated users */}
            <Route path="/contact" element={<Contact />} />

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Error" element={<Error />} />
            <Route path="/Leave" element={<Leave />} />
            <Route path="/Leave Request" element={<LeaveRequest />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/update/:id" element={<LeaveRequest />} />
            <Route path="/view/:id" element={<View />} />
            <Route path="/View_salary" element={<SalaryHistory />} />
            <Route path="/ApproveLeaveSupervisor" element={<SupervisorLeaveApprove />} />
            <Route path='/createonlyloginpage' element={<Newloginpage />} />


            {/* Catch-all for unknown routes */}
            <Route path="*" element={<Error />} />
          </Routes>
        </AppLayout>


      </Router>
    </AuthProvider>
  );
}

export default App;
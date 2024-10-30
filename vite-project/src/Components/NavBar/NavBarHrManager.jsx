import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContexts';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BarChartIcon from '@mui/icons-material/BarChart';

const SideNavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/createonlyloginpage');
  };

  const NavItem = ({ icon: Icon, label, to, onClick }) => (
    <div className="relative group">
      {to ? (
        <Link
          to={to}
          className="flex items-center gap-4 px-4 py-3 text-gray-300 hover:bg-slate-700 rounded-lg transition-all duration-300 w-full"
        >
          <Icon className="w-6 h-6 flex-shrink-0" />
          <span className="whitespace-nowrap">{label}</span>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className="flex items-center gap-4 px-4 py-3 text-gray-300 hover:bg-slate-700 rounded-lg transition-all duration-300 w-full"
        >
          <Icon className="w-6 h-6 flex-shrink-0" />
          <span className="whitespace-nowrap">{label}</span>
        </button>
      )}
    </div>
  );

  return (
    <div className="fixed left-0 top-0 h-screen bg-slate-900 text-white w-64 flex flex-col shadow-2xl">
      {/* Logo Section */}
      <div className="p-4 flex items-center gap-4">
        <RocketLaunchIcon className="w-8 h-8 text-emerald-500" />
        <span className="text-xl font-bold text-emerald-500">JUPITER</span>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 px-2 py-4 flex flex-col gap-2">
        <NavItem icon={HomeIcon} label="Dashboard" to="/dashboard" />
        <NavItem 
          icon={CalendarMonthIcon} 
          label="All Leave Requests" 
          to="/ApproveLeaveSupervisor" 
        />
        <NavItem 
          icon={CalendarMonthIcon} 
          label="My Leave Requests" 
          to="/Leave" 
        />
        <NavItem 
          icon={PeopleIcon} 
          label="All Employees" 
          to="/AllEmployees" 
        />
        <NavItem 
          icon={AccountCircleIcon} 
          label="Profile" 
          to="/profile" 
        />
        {/* Reports Section */}
        <NavItem 
          icon={BarChartIcon} 
          label="Reports" 
          to="/ReportingModule" 
        />
      </div>

      {/* Auth Section */}
      <div className="px-2 py-4 border-t border-slate-700">
        {!user && (
          <NavItem 
            icon={LoginIcon} 
            label="Login" 
            to="/createonlyloginpage" 
          />
        )}
        {user && (
          <NavItem 
            icon={LogoutIcon} 
            label="Logout" 
            onClick={handleLogout} 
          />
        )}
      </div>
    </div>
  );
};

export default SideNavBar;

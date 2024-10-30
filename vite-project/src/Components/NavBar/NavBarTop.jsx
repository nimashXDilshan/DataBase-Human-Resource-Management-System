import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContexts';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const TopNavBar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        logout();
        navigate('/createonlyloginpage');
    };

    const NavItem = ({ icon: Icon, label, to, onClick }) => (
        <div className="flex items-center">
            {to ? (
                <Link
                    to={to}
                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-slate-700 rounded-lg transition-all duration-300"
                >
                    <Icon className="w-6 h-6 flex-shrink-0" />
                    <span className="whitespace-nowrap">{label}</span>
                </Link>
            ) : (
                <button
                    onClick={onClick}
                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-slate-700 rounded-lg transition-all duration-300"
                >
                    <Icon className="w-6 h-6 flex-shrink-0" />
                    <span className="whitespace-nowrap">{label}</span>
                </button>
            )}
        </div>
    );

    return (
        <div className="fixed top-0 left-0 right-0 h-16 bg-slate-900 text-white flex items-center shadow-md z-50">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-4 px-4">
                <RocketLaunchIcon className="w-8 h-8 text-emerald-500" />
                <span className="text-xl font-bold text-emerald-500 pl-5">JUPITER</span>
            </Link>


            {/* Spacer to push the login button to the right */}
            <div className="flex-grow" />

            {/* Auth Section */}
            <div
                onClick={handleLogin}
                className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-slate-700 rounded-lg cursor-pointer transition-all duration-300"
            >
                <LoginIcon className="w-6 h-6 flex-shrink-0" />
                <span className="whitespace-nowrap">Login</span>
            </div>
        </div>
    );
};

export default TopNavBar;

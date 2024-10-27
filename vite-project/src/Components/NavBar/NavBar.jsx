import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContexts';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    navigate('/createonlyloginpage');
  };

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-emerald-500 hover:text-emerald-400 transition-colors">
            JUPITER
          </Link>
          
          <button
            className="lg:hidden px-3 py-2 rounded-md text-gray-200 hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <div className={`lg:flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2 ${isOpen ? 'flex' : 'hidden'} absolute lg:relative top-16 lg:top-0 left-0 right-0 bg-slate-800 lg:bg-transparent p-4 lg:p-0 shadow-xl lg:shadow-none z-50`}>
            {/* Main Navigation Links */}
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" }
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-200 hover:bg-slate-700 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Employee Section */}
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 mt-2 lg:mt-0 lg:ml-4">
              {[
                { to: "/I'm Employee", label: "I'm Employee" },
                { to: "/Leave", label: "Leave" },
                { to: "/FillEmployeeDetails", label: "Fill Details" },
                { to: "/profile", label: "Profile" }
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-200 hover:bg-slate-700 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Auth Section */}
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 mt-2 lg:mt-0 lg:ml-4">
              <Link
                to="/newLogin"
                className="px-4 py-2 rounded-md text-sm font-medium text-gray-200 hover:bg-slate-700 hover:text-white transition-colors"
              >
                Login
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
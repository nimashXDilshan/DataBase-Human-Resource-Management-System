import React from 'react';
import { useNavigate } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const Dashboard = () => {
  const today = new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Date Banner */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-300 to-blue-100 text-blue-900 text-center rounded-lg shadow-lg flex items-center justify-center space-x-4">
        <CalendarTodayIcon fontSize="large" className="text-blue-900" />
        <h5 className="text-xl font-bold">{today}</h5>
      </div>

      {/* Dashboard Overview */}
      <h4 className="text-3xl text-gray-800 font-bold text-center p-4">Dashboard Overview</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Total Employees */}
        <div 
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer text-center"
          onClick={() => navigate('/allemployees')}
        >
          <PeopleIcon fontSize="large" className="text-blue-500 mb-2" />
          <h6 className="text-lg font-bold text-gray-800">Total Employees</h6>
          <h3 className="text-4xl text-purple-600 font-bold">250</h3>
        </div>

        {/* Latest Leave Request */}
        <div 
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer text-center" 
          onClick={() => navigate('/leaverequests')}
        >
          <EventNoteIcon fontSize="large" className="text-blue-500 mb-2" />
          <h6 className="text-lg font-bold text-gray-800">Latest Leave Request</h6>
          <h5 className="text-lg text-blue-500">John Doe</h5>
          <p className="text-gray-600">Requested on: 2024-10-08</p>
        </div>

        {/* Average Salary */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <AttachMoneyIcon fontSize="large" className="text-blue-500 mb-2" />
          <h6 className="text-lg font-bold text-gray-800">Average Salary</h6>
          <h3 className="text-4xl text-purple-600 font-bold">$55,000</h3>
        </div>

        {/* Pending Leave Requests */}
        <div 
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer text-center" 
          onClick={() => navigate('/leaverequests')}
        >
          <PendingActionsIcon fontSize="large" className="text-blue-500 mb-2" />
          <h6 className="text-lg font-bold text-gray-800">Pending Leave Requests</h6>
          <h4 className="text-4xl text-purple-600 font-bold">12</h4>
        </div>

        {/* Employee Satisfaction */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <SentimentVerySatisfiedIcon fontSize="large" className="text-blue-500 mb-2" />
          <h6 className="text-lg font-bold text-gray-800">Employee Satisfaction</h6>
          <h4 className="text-4xl text-purple-600 font-bold">85%</h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

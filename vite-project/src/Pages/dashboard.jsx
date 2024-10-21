// src/components/Dashboard.js
import React from 'react';

const Dashboard = () => {
  const employee = {
    name: 'John Doe',
    role: 'Software Engineer',
    department: 'IT',
    joinDate: 'January 15, 2020',
    leaveBalance: 12,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Jupiter Apparel Employee Dashboard</h1>
        
        <p className="text-lg text-gray-700 mb-6">
          Hello <span className="font-bold">{employee.name}</span>, welcome back to your dashboard. Here you can find
          your employee details, monitor your activities, and keep track of your leave balance.
        </p>
        
        <p className="text-lg text-gray-700 mb-6">
          Jupiter Apparel is a leading company in the fashion industry, renowned for its sustainable and innovative
          clothing solutions. As a valued member of our team, we encourage you to explore the tools and resources 
          available to enhance your work experience.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Employee Information</h2>
        <p className="text-lg text-gray-700 mb-2"><strong>Name:</strong> {employee.name}</p>
        <p className="text-lg text-gray-700 mb-2"><strong>Role:</strong> {employee.role}</p>
        <p className="text-lg text-gray-700 mb-2"><strong>Department:</strong> {employee.department}</p>
        <p className="text-lg text-gray-700 mb-2"><strong>Date Joined:</strong> {employee.joinDate}</p>
        <p className="text-lg text-gray-700 mb-6"><strong>Available Leave Balance:</strong> {employee.leaveBalance} days</p>

        <p className="text-lg text-gray-700">
          For any assistance or support, feel free to reach out to your HR manager. We are committed to providing
          a safe and supportive working environment where you can thrive and grow professionally.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;

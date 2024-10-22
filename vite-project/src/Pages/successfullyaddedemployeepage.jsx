import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/dashboard'); // Redirect to the dashboard
  };

  const handleAddNewEmployee = () => {
    navigate('/FillEmployeeDetails'); // Redirect to the form for adding a new employee
  };

  return (
    <div className="min-h-screen bg-green-200 flex items-center justify-center p-6">
      <div className="max-w-xl w-full p-8 bg-gray-800 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Success!</h2>
        <p className="text-lg text-gray-300 mb-6">
          The new employee has been successfully added to the system.
        </p>
        <button
          onClick={handleBackToDashboard}
          className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-500 transition duration-300 mb-4"
        >
          Back to Dashboard
        </button>
        <br />
        <button
          onClick={handleAddNewEmployee}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300"
        >
          Add Another Employee
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;

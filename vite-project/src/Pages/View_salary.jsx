import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContexts";
import api from "../config";

const SalaryHistory = () => {
  const [salaryData, setSalaryData] = useState([]); // State to hold salary records
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error messages
  const navigate = useNavigate(); // Use navigate for routing
  const { user } = useAuth(); // Retrieve user object from AuthContext
  const employee_id = user?.employee_id; 

  // Fetch salary data from the database
  useEffect(() => {
    const fetchSalaryData = async () => {
      if (!employee_id) return; // Ensure employee_id is defined

      try {
        setLoading(true); // Set loading to true before fetching
        const response = await api.get(`/api/Salary_Record/${employee_id}`); // Use the configured Axios instance
        setSalaryData(response.data); // Set salary data to state
      } catch (error) {
        setError(error.message); // Set error message
        console.error("Failed to fetch salary data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchSalaryData(); // Call the fetch function
  }, [employee_id]);

  // Handle navigation back to profile
  const handleBackToProfile = () => {
    navigate("/profile"); // Navigate to the profile page
  };

  // Handle report download (implement functionality as needed)
  const handleDownloadReport = () => {
    console.log("Download Report clicked");
    // Implement download functionality here
  };

  // Format salary amount
  const formatSalary = (amount) => {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Salary History</h2>
        
        {loading && <p className="text-center text-gray-700">Loading salary records...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
          <caption className="mb-4 text-lg font-semibold">Previous Salary Records</caption>
          <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left font-semibold">Employee ID</th>
              <th className="px-6 py-3 text-left font-semibold">Employee Name</th>
              <th className="px-6 py-3 text-left font-semibold">Effective Date</th>
              <th className="px-6 py-3 text-left font-semibold">Salary Amount</th>
              <th className="px-6 py-3 text-left font-semibold">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {salaryData.length > 0 ? (
              salaryData.map((salary, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-blue-50" : "bg-white"
                  } transition-colors duration-300 hover:bg-blue-100`}
                >
                  <td className="px-6 py-4 text-gray-700 border-b">{salary.employee_id}</td>
                  <td className="px-6 py-4 text-gray-700 border-b">{salary.first_name} {salary.middle_name} {salary.last_name}</td>
                  <td className="px-6 py-4 text-gray-700 border-b">
                    {new Date(salary.date).toLocaleDateString("en-US")} {/* Format the date */}
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-b">{formatSalary(salary.salary_amount)}</td>
                  <td className="px-6 py-4 text-gray-700 border-b">{salary.remark}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-gray-700 py-4">
                  No records are available.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={handleDownloadReport}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium shadow hover:bg-blue-600 transition duration-300"
          >
            Download Report
          </button>
          
          <button
            onClick={handleBackToProfile}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium shadow hover:bg-blue-600 transition duration-300"
          >
            Back to My Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalaryHistory;

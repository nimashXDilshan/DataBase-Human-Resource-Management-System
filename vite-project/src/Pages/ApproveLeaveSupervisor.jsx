import React, { useEffect, useState } from "react";
import axios from "axios";

const LeaveRequestsApprover = () => {
  const [requests, setRequests] = useState([]);
  const [expandedRequestId, setExpandedRequestId] = useState(null);

  // Function to fetch leave requests
  const showRequest = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/approveLeave/");
      setRequests(res.data || []);
    } catch (err) {
      console.error("Error fetching leave requests:", err);
    }
  };

  useEffect(() => {
    showRequest(); // Fetch leave requests on component mount
  }, []);

  // Function to update the status and refresh the list
  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/approveLeave/${id}`, { status });

      // Re-fetch the updated leave requests
      showRequest();
    } catch (error) {
      console.error("Error updating leave request status:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Employee Leave Requests</h1>
      </div>

      {/* Leave Request Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-middle font-semibold text-gray-700 border">Leave ID</th>
              <th className="px-4 py-2 text-middle font-semibold text-gray-700 border">Start Date</th>
              <th className="px-4 py-2 text-middle font-semibold text-gray-700 border">End Date</th>
              <th className="px-4 py-2 text-middle font-semibold text-gray-700 border">Leave Type</th>
              <th className="px-4 py-2 text-middle font-semibold text-gray-700 border">Reason</th>
              <th className="px-4 py-2 text-middle font-semibold text-gray-700 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50 transition duration-300">
                  <td className="px-4 py-2 border">{request.id}</td>
                  <td className="px-4 py-2 border">{formatDate(request.from_date)}</td>
                  <td className="px-4 py-2 border">{formatDate(request.to_date)}</td>
                  <td className="px-4 py-2 border">{request.leave_type}</td>
                  <td className="px-4 py-2 border">{request.leave_reason}</td>
                  <td className="px-4 py-2 border">
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition duration-200 mr-2"
                      onClick={() => updateStatus(request.leave_id, "Approved")}
                    >
                      Approve
                    </button>

                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
                      onClick={() => updateStatus(request.leave_id, "Not Approved")}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-gray-500 border">
                  No leave requests available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveRequestsApprover;

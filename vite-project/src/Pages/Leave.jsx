import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContexts";

const Leave = () => {
  const [data, setData] = useState([]);
  const [requestedLeaves, setRequestedLeaves] = useState(0);
  const [approvedLeaves, setApprovedLeaves] = useState(1); // Should come from admin pages
  const [remainingLeaves, setRemainingLeaves] = useState(49); // Assuming a total of 50 leaves

  const { user } = useAuth(); // Retrieve user object from AuthContext
  const employee_id = user?.employee_id;

  const loadData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/Loadleave/${employee_id}`);
      setData(response.data);
      setRequestedLeaves(response.data.length);
      setRemainingLeaves(50 - approvedLeaves); // Recalculate remaining leaves
    } catch (error) {
      console.error("Error loading data:", error);
      toast.error("Error loading leaves data. Please try again."); // Handle error notification
    }
  };

  useEffect(() => {
    loadData();
  }, [employee_id]);

  
  const deleteContent = async (id) => {
    if (window.confirm("Are you sure that you want to delete this content?")) {
      try {
        await axios.delete(`http://localhost:5000/api/Deleteleave/${id}`);
        toast.success("Content deleted successfully");
        loadData(); // Refresh data after deletion
      } catch (error) {
        toast.error("Error deleting content. Please try again.");
        console.error("Error deleting content:", error);
      }
    }
  };

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toISOString().split("T")[0];
  };

  return (
    <>
      <div className="bg-blue-200">
        <div className="container mx-auto p-10 flex justify-around mt-5 space-x-6">
          <div className="card bg-white p-6 rounded-lg shadow-lg w-1/4 transition duration-300 hover:shadow-2xl">
            <div className="text-center pb-2">
              <h4 className="card-title text-lg font-semibold text-gray-700">Requested Leaves:</h4>
            </div>
            <hr className="my-3 border-gray-300" />
            <div className="text-center">
              <h5 className="card-total text-3xl font-bold text-indigo-600">{requestedLeaves}</h5>
            </div>
          </div>

          <div className="card bg-white p-6 rounded-lg shadow-lg w-1/4 transition duration-300 hover:shadow-2xl">
            <div className="text-center pb-2">
              <h4 className="card-title text-lg font-semibold text-gray-700">Approved Leaves:</h4>
            </div>
            <hr className="my-3 border-gray-300" />
            <div className="text-center">
              <h5 className="card-total text-3xl font-bold text-green-600">{approvedLeaves}</h5>
            </div>
          </div>

          <div className="card bg-white p-6 rounded-lg shadow-lg w-1/4 transition duration-300 hover:shadow-2xl">
            <div className="text-center pb-2">
              <h4 className="card-title text-lg font-semibold text-gray-700">Remaining Leaves:</h4>
            </div>
            <hr className="my-3 border-gray-300" />
            <div className="text-center">
              <h5 className="card-total text-3xl font-bold text-red-600">{remainingLeaves}</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Link
          to="/Leave Request"
          className="inline-block rounded-full bg-slate-900 px-12 py-3 text-sm font-medium text-white transition hover:bg-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
        >
          Create New Leave Request
        </Link>
      </div>
      <br />

      <div className="mt-4">
        <table className="table-auto w-full border-collapse rounded-lg shadow-lg overflow-hidden">
          <thead className="bg-gradient-to-r bg-slate-900 text-white">
            <tr>
              <th className="py-3 px-4 text-center">No.</th>
              <th className="py-3 px-4 text-center">Leave Type</th>
              <th className="py-3 px-4 text-center">From</th>
              <th className="py-3 px-4 text-center">To</th>
              <th className="py-3 px-4 text-center">Leave Reason</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {data.slice(0).reverse().map((item, index) => (
              <tr key={item.leave_id} className="hover:bg-gray-100 transition duration-300">
                <td className="py-3 px-4 text-center font-medium text-gray-700">{index + 1}</td>
                <td className="py-3 px-4 text-center">{item.leave_type}</td>
                <td className="py-3 px-4 text-center">{formatDate(item.from_date)}</td>
                <td className="py-3 px-4 text-center">{formatDate(item.to_date)}</td>
                <td className="py-3 px-4 text-center">{item.leave_reason}</td>
                <td className="py-3 px-4 text-center space-x-3">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                    onClick={() => deleteContent(item.leave_id)}
                  >
                    Delete
                  </button>
                  <Link to={`/View/${item.leave_id}`}>
                    <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-black">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Leave;

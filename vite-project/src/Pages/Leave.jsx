import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Logofooter from "../Components/Logo-Footer/logofooter";

const Leave = () => {
  const [data, setData] = useState([]);
  const [requestedLeaves, setRequestedLeaves] = useState(1);
  const [approvedLeaves, setApprovedLeaves] = useState(1); // This should come from admin pages.
  const [remainingLeaves, setRemainingLeaves] = useState(50 - approvedLeaves);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
    setRequestedLeaves(response.data.length);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteContent = (id) => {
    if (window.confirm("Are you sure that you want to delete this content?")) {
      axios.delete(`http://localhost:5000/api/remove/${id}`);
      toast.success("Content deleted successfully");
      setTimeout(() => loadData(), 500);
    }
  };

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toISOString().split("T")[0];
  };

  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-navy-900 min-h-screen">
        <div className="container mx-auto p-10 flex justify-around mt-5 space-x-6">
          <div className="card bg-white p-6 rounded-lg shadow-lg w-1/4 transition duration-300 hover:shadow-2xl">
            <div className="text-center pb-2">
              <h4 className="card-title text-lg font-semibold text-gray-700">
                Requested Leaves:
              </h4>
            </div>
            <hr className="my-3 border-gray-300" />
            <div className="text-center">
              <h5 className="card-total text-3xl font-bold text-indigo-600">
                {requestedLeaves}
              </h5>
            </div>
          </div>

          <div className="card bg-white p-6 rounded-lg shadow-lg w-1/4 transition duration-300 hover:shadow-2xl">
            <div className="text-center pb-2">
              <h4 className="card-title text-lg font-semibold text-gray-700">
                Approved Leaves:
              </h4>
            </div>
            <hr className="my-3 border-gray-300" />
            <div className="text-center">
              <h5 className="card-total text-3xl font-bold text-green-600">
                {approvedLeaves}
              </h5>
            </div>
          </div>

          <div className="card bg-white p-6 rounded-lg shadow-lg w-1/4 transition duration-300 hover:shadow-2xl">
            <div className="text-center pb-2">
              <h4 className="card-title text-lg font-semibold text-gray-700">
                Remaining Leaves:
              </h4>
            </div>
            <hr className="my-3 border-gray-300" />
            <div className="text-center">
              <h5 className="card-total text-3xl font-bold text-red-600">
                {remainingLeaves}
              </h5>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link
            to="/Leave Request"
            className="inline-block rounded-full bg-gradient-to-r from-gray-600 to-gray-900 px-12 py-3 text-sm font-medium text-white transition duration-300 ease-in-out transform hover:scale-105 hover:from-gray-400 hover:to-gray-700 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-300 sm:w-auto hover:font-bold" 
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
              {data.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-100 transition duration-300"
                >
                  <td className="py-3 px-4 text-center font-medium text-gray-700">
                    {index + 1}
                  </td>
                  <td className="py-3 px-4 text-center">{item.leave_type}</td>
                  <td className="py-3 px-4 text-center">
                    {formatDate(item.from_date)}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {formatDate(item.to_date)}
                  </td>
                  <td className="py-3 px-4 text-center">{item.leave_reason}</td>
                  <td className="py-3 px-4 text-center space-x-3">
                    <Link to={`/update/${item.id}`}>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                      onClick={() => deleteContent(item.id)}
                    >
                      Delete
                    </button>
                    <Link to={`/view/${item.id}`}>
                      <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-black">
                        View
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br></br>
          <br></br>
        </div>

        <div>
          <Logofooter />
        </div>
      </div>
    </>
  );
};

export default Leave;

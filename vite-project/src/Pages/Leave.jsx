import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Leave.css"; 

const Leave = () => {
  const [data, setData] = useState([]);
  const [requestedLeaves, setRequestedLeaves] = useState(1); // This should be incremented when the form is submitted.
  const [approvedLeaves, setApprovedLeaves] = useState(1); // This should come from admin pages.
  const [remainingLeaves, setRemainingLeaves] = useState(50-approvedLeaves); 

  return (
    <>
        <div className="container p-10 d-flex justify-content-around mt-3 ml-12">
          <div className="card px-3 pt-2 pb-3 shadow-sm w-25">
            <div className="text-center pb-1">
              <h4 className="card-title">Requested Leaves : </h4>
            </div>
            <hr />
            <div className="text-center">
              <h5 className="card-total">{requestedLeaves}</h5>
            </div>
          </div>
          <div className="card px-3 pt-2 pb-3 shadow-sm w-25">
            <div className="text-center pb-1">
              <h4 className="card-title">Approved Leaves : </h4>
            </div>
            <hr />
            <div className="text-center">
              <h5 className="card-total">{approvedLeaves}</h5>
            </div>
          </div>
          <div className="card px-3 pt-2 pb-3 shadow-sm w-25">
            <div className="text-center pb-1">
              <h4 className="card-title">Remaining Leaves : </h4>
            </div>
            <hr />
            <div className="text-center">
              <h5 className="card-total">{remainingLeaves}</h5>
            </div>
          </div>

          <div className="px-5 mt-3 ml-6">
        <Link
          to="/Leave Request"
          className="block rounded bg-black border px-12 py-3 mt-6 text-sm font-medium text-white hover:bg-white hover:border-black hover:text-black focus:outline-none focus:ring sm:w-auto"
        >
          Leave Request
        </Link>
        </div>
        </div>

        <div className="container px-12 d-flex justify-content-around mt-7">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-10 py-2 text-left font-bold text-gray-700">
                  Leave Type
                </th>
                <th className="border px-10 py-2 text-left font-bold text-gray-700">
                  From
                </th>
                <th className="border px-10 py-2 text-left font-bold text-gray-700">
                  To
                </th>
                <th className="border px-10 py-2 text-left font-bold text-gray-700">
                  Reason
                </th>
                <th className="border px-10 py-2 text-left font-bold text-gray-700">
                  Leave Request Status
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((e) => (
                <tr>
                  <td className="border px-4 py-2">{e.leaveType}</td>
                  <td className="border px-4 py-2">{e.from_date}</td>
                  <td className="border px-4 py-2">{e.to_date}</td>
                  <td className="border px-4 py-2">{e.leaveReason}</td>
                  <td className="border px-4 py-2">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring"
                    >
                      Edit
                    </button>
                    <button
                      type="submit"
                      className="bg-yellow-500 text-white font-bold py-2 px-4 rounded ml-2 hover:bg-yellow-700 focus:outline-none focus:ring"
                    >
                      Delete
                    </button>
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

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./View.css";

const View = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((resp) => setUser({ ...resp.data[0] }));
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // This gives the format YYYY-MM-DD
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100" style={{ marginTop: "50px" }}>
  <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
    <div className="bg-gray-900 text-white text-center py-3 rounded-t-lg">
      <p className="text-xl font-bold">Employee Leave Request Details</p>
    </div>
    
    <div className="p-6">
      <div className="mb-4">
        <strong className="text-gray-700">ID: </strong>
        <span className="text-gray-900">{id}</span>
      </div>

      <div className="mb-4">
        <strong className="text-gray-700">Leave Type: </strong>
        <span className="text-gray-900">{user.leave_type}</span>
      </div>

      <div className="mb-4">
        <strong className="text-gray-700">From: </strong>
        <span className="text-gray-900">{user.from_date ? formatDate(user.from_date) : ""}</span>
      </div>

      <div className="mb-4">
        <strong className="text-gray-700">To: </strong>
        <span className="text-gray-900">{user.to_date ? formatDate(user.to_date) : ""}</span>
      </div>

      <div className="mb-6">
        <strong className="text-gray-700">Leave Reason: </strong>
        <span className="text-gray-900">{user.leave_reason}</span>
      </div>

      <Link to="/Leave">
        <button className="w-full py-3 bg-gray-900 text-white rounded-lg transition duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
          Approved
        </button>
        <div><br></br></div>
        
        <button className="w-full py-3 bg-gray-500 text-white rounded-lg transition duration-200 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400">
          Not Approved
        </button>
      </Link>
    </div>
  </div>
</div>

    // <div style={{marginTop:"150px"}}>
    //   <div className="card1">
    //     <div className="card-header">
    //         <p>Employee Leave Request Details</p>
    //     </div>
    //     <div className="container1">
    //         <strong>ID: </strong>
    //         <span>{id}</span>
    //         <br/>
    //         <br/>

    //         <strong>Leave Type: </strong>
    //         <span>{user.leave_type}</span>
    //         <br/>
    //         <br/>

    //         <strong>From: </strong>
    //         <span>{user.from_date ? formatDate(user.from_date) : ""}</span>
    //         <br/>
    //         <br/>

    //         <strong>To: </strong>
    //         <span>{user.to_date ? formatDate(user.to_date) : ""}</span>
    //         <br/>
    //         <br/>

    //         <strong>Leave Reason: </strong>
    //         <span>{user.leave_reason}</span>
    //         <br/>
    //         <br/>

    //         <Link to="/Leave">
    //             <div className="btn btn-edit">Go Back</div>
    //         </Link>

    //     </div>
    //   </div>
    // </div>
  );
};

export default View;

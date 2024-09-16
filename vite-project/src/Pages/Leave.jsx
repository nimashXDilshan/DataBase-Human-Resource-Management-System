import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Leave.css";
import {toast} from "react-toastify";

const Leave = () => {
  const [data, setData] = useState([]);
  const [requestedLeaves, setRequestedLeaves] = useState(1); 
  const [approvedLeaves, setApprovedLeaves] = useState(1); // This should come from admin pages.
  const [remainingLeaves, setRemainingLeaves] = useState(50 - approvedLeaves);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteContent = (id) => {
    if(window.confirm("Are you sure that you want to delete this content?")){
      axios.delete(`http://localhost:5000/api/remove/${id}`);
      toast.success("Content deleted successfully");
      setTimeout(() => loadData(), 500);
    }
  }

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toISOString().split('T')[0];
  };

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

      <div style={{marginTop: "15px"}}>
        <table className="styled-table">
          <thead>
            <tr>
            <th style={{textAlign: "center"}}>No.</th>
              <th style={{textAlign: "center"}}>Leave Type</th>
              <th style={{textAlign: "center"}}>From</th>
              <th style={{textAlign: "center"}}>To</th>
              <th style={{textAlign: "center"}}>Leave Reason</th>
              {/* <th style={{textAlign: "center"}}>Status</th>           whether the request is approved/rejected/pending */}
              <th style={{textAlign: "center"}}>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => {
              return(
                <tr key={item.id}>
                  <th scope="row">{index+1}</th>
                  <td>{item.leave_type}</td>
                  <td>{formatDate(item.from_date)}</td>
                  <td>{formatDate(item.to_date)}</td>
                  <td>{item.leave_reason}</td>
                  <td>
                    <Link to={`/update/${item.id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button className="btn btn-delete" onClick={() => deleteContent(item.id)}>Delete</button>
                    <Link to={`/view/${item.id}`}>
                      <button className="btn btn-view">View</button>
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>

        </table>
      
      </div>

    </>
  );
};

export default Leave;

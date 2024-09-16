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

  return (
    <div style={{marginTop:"150px"}}>
      <div className="card1">
        <div className="card-header">
            <p>Employee Leave Request Details</p>
        </div>
        <div className="container1">
            <strong>ID: </strong>
            <span>{id}</span>
            <br/>
            <br/>

            <strong>Leave Type: </strong>
            <span>{user.leave_type}</span>
            <br/>
            <br/>

            <strong>From: </strong>
            <span>{user.from_date}</span>
            <br/>
            <br/>

            <strong>To: </strong>
            <span>{user.to_date}</span>
            <br/>
            <br/>

            <strong>Leave Reason: </strong>
            <span>{user.leave_reason}</span>
            <br/>
            <br/>

            <Link to="/Leave">
                <div className="btn btn-edit">Go Back</div>
            </Link>

        </div>
      </div>
    </div>
  );
};

export default View;

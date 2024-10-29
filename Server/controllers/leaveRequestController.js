import db from "../config/db.js";

export const getAllLeaveRequestEmployeeId = (req, res) => {
  const employeeId = req.params.employee_id;
  const sqlGet = "SELECT * FROM leave_request WHERE employee_id = ?"; // Added WHERE clause
  db.query(sqlGet, [employeeId], (error, result) => {
    if (error) {
      console.error("Error retrieving leave requests:", error); // Log the error for debugging
      return res.status(500).send("Error retrieving leave requests");
    }
    res.send(result);
  });
};


export const createLeaveRequest = (req, res) => {
  const { leave_type, from_date, to_date, leave_reason, id} = req.body;
  console.log(req.body);
  const sqlInsert = "INSERT INTO leave_request (leave_type, from_date, to_date, leave_reason, employee_id) VALUES (?,?,?,?,?)";
  
  db.query(sqlInsert, [leave_type, from_date, to_date, leave_reason, id], (error, result) => {
    if (error) {
      console.log("SQL error:", error);
      return res.status(500).send("Error creating leave request");
    }
    res.send(result);
  });
};

export const deleteLeaveRequest = (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM leave_request WHERE leave_id = ?";
  
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log("SQL error:", error);
      return res.status(500).send("Error deleting leave request");
    }
    res.send(result);
  });
};

export const getLeaveRequestById = (req, res) => {
  const { id } = req.params; // Extract the id from the request parameters
  const sqlGet = "SELECT * FROM leave_request WHERE leave_id = ?"; // SQL query to fetch the leave request by id

  db.query(sqlGet, [id], (error, result) => {
    if (error) {
      console.error("Error retrieving leave request:", error);
      return res.status(500).send("Error retrieving leave request");
    }
    res.send(result);
  });
};




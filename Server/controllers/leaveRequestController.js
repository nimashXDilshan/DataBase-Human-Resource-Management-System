import db from "../config/db.js";

export const getAllLeaveRequests = (req, res) => {
  const sqlGet = "SELECT * FROM leave_request";
  db.query(sqlGet, (error, result) => {
    if (error) {
      return res.status(500).send("Error retrieving leave requests");
    }
    res.send(result);
  });
};

export const createLeaveRequest = (req, res) => {
  const { leave_type, from_date, to_date, leave_reason } = req.body;
  console.log(req.body);
  const sqlInsert = "INSERT INTO leave_request (leave_type, from_date, to_date, leave_reason) VALUES (?,?,?,?)";
  
  db.query(sqlInsert, [leave_type, from_date, to_date, leave_reason], (error, result) => {
    if (error) {
      console.log("SQL error:", error);
      return res.status(500).send("Error creating leave request");
    }
    res.send(result);
  });
};

export const deleteLeaveRequest = (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM leave_request WHERE id = ?";
  
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log("SQL error:", error);
      return res.status(500).send("Error deleting leave request");
    }
    res.send(result);
  });
};

export const getLeaveRequestById = (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM leave_request WHERE id = ?";
  
  db.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error retrieving leave request");
    }
    res.send(result);
  });
};

export const updateLeaveRequest = (req, res) => {
  const { id } = req.params;
  const { leave_type, from_date, to_date, leave_reason } = req.body;
  const sqlUpdate = "UPDATE leave_request SET leave_type = ?, from_date = ?, to_date = ?, leave_reason = ? WHERE id = ?";

  db.query(sqlUpdate, [leave_type, from_date, to_date, leave_reason, id], (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error updating leave request");
    }
    res.send(result);
  });
};

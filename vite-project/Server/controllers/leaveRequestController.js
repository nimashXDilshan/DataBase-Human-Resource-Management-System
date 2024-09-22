import db from '../config/db.js';

export const getLeaveRequests = (req, res) => {
  const sqlGet = "SELECT * FROM leave_request";
  db.query(sqlGet, (error, result) => {
    if (error) console.log("SQL error:", error);
    res.send(result);
  });
};

export const addLeaveRequest = (req, res) => {
  const { leave_type, from_date, to_date, leave_reason } = req.body;
  const sqlInsert = "INSERT INTO leave_request(leave_type, from_date, to_date, leave_reason) VALUES (?,?,?,?)";
  db.query(sqlInsert, [leave_type, from_date, to_date, leave_reason], (error, result) => {
    if (error) console.log("SQL error:", error);
    res.send(result);
  });
};

export const deleteLeaveRequest = (req, res) => {
    const { id } = req.params;  // Assuming the ID is passed in the URL as a parameter
    const sqlDelete = "DELETE FROM leave_request WHERE id = ?";
    db.query(sqlDelete, [id], (error, result) => {
      if (error) {
        console.log("SQL error:", error);
        return res.status(500).send("Error deleting the leave request");
      }
      res.send({ message: "Leave request deleted successfully", result });
    });
  };

  export const updateLeaveRequest = (req, res) => {
    const { id } = req.params;  // Assuming the ID is passed in the URL as a parameter
    const { leave_type, from_date, to_date, leave_reason } = req.body;
    const sqlUpdate = "UPDATE leave_request SET leave_type = ?, from_date = ?, to_date = ?, leave_reason = ? WHERE id = ?";
    db.query(sqlUpdate, [leave_type, from_date, to_date, leave_reason, id], (error, result) => {
      if (error) {
        console.log("SQL error:", error);
        return res.status(500).send("Error updating the leave request");
      }
      res.send({ message: "Leave request updated successfully", result });
    });
  };
  

// Similarly, create deleteLeaveRequest, updateLeaveRequest, getLeaveRequestById functions

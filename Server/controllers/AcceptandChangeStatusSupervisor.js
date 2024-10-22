import db from "../config/db.js"
export const getUnseenLeaveRequests = (req, res) => {
    const sqlCode = "SELECT * FROM leave_request WHERE status='Unseen'";
    db.query(sqlCode,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    });
  };
  export const getUpdatedData = (req, res) => {
    const { id } = req.params; // leave_id
    const { status } = req.body; // This will either be 'Approved' or 'Not Approved'
    
    // Update the leave request status in the database
    const sqlUpdate = "UPDATE leave_request SET status = ? WHERE id = ?"; // Use id from params
    db.query(sqlUpdate, [status, id], (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to update leave request status" });
      }
      res.json({ message: "Leave request status updated successfully", results });
    });
  };
  
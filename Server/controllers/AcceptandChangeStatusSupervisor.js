import db from "../config/db.js"
export const getUnseenLeaveRequests = (req, res) => {
    const sqlCode = "call getUnSeenLeaves();";
    db.query(sqlCode,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data[0])
    });
  };
  export const getUpdatedData = (req, res) => {
    const { id } = req.params; // leave_id
    const { status } = req.body; // This will either be 'Approved' or 'Not Approved'
    
    // Update the leave request status in the database
    const sqlUpdate = "call approveLeave(?,?);"; // Use id from params
    db.query(sqlUpdate, [status, id], (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to update leave request status" });
      }
      res.json({ message: "Leave request status updated successfully", results });
    });
  };
  
import db from "../config/db.js"
export const getUnseenLeaveRequests = (req, res) => {
  const employeeId = req.params.employee_id;

  // SQL query to fetch unseen leave requests for the specified employee
  const sqlCode = "call getUnSeenLeaves(?)";

  // Execute the SQL query
  db.query(sqlCode, [employeeId], (err, data) => {
    if (err) {
      console.error("Database query error:", err); // Log the error for debugging
      return res.status(500).json({ error: "An error occurred while fetching leave requests." }); // Send a user-friendly error message
    }
    
    // If no unseen leave requests are found, send an appropriate response
    if (data.length === 0) {
      return res.status(404).json({ message: "No unseen leave requests found." });
    }
    
    // Return the unseen leave requests
    return res.json(data[0]);
  });
};

export const getUpdatedData = (req, res) => {
  const { leave_id } = req.params; // Corrected line
  const { leave_status } = req.body; // This will either be 'Approved' or 'Not Approved'

  // Update the leave request status in the database
  const sqlUpdate = "call uppdateLeaveTable(?,?)";
  db.query(sqlUpdate, [leave_status, leave_id], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to update leave request status" });
    }
    res.json({ message: "Leave request status updated successfully", results });
  });
};

  
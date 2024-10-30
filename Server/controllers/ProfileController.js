import db from "../config/db.js";


// Fetch a specific employee by ID
export const getEmployee = (req, res) => {
  const employeeId = req.params.employee_id; // Replace with dynamic value if needed
  const sql = "call getEmployeeData(?)";

  db.query(sql, [employeeId], (err, data) => {
    if (err) {
      console.error("Error fetching employee:", err);
      return res.status(500).json({ error: "Error fetching employee data" });
    }
    res.json(data[0]);
  });
};

// Fetch employee details, including supervisor and role information
export const getEmployeeDetails = (req, res) => {
  const employeeId = req.params.employee_id; // Replace with dynamic value if needed
  const sql = "call getOneEmployeeData(?)"

  db.query(sql, [employeeId], (err, data) => {
    if (err) {
      console.error("Error fetching employee details:", err);
      return res.status(500).json({ error: "Error fetching employee details" });
    }
    res.json(data[0]);
  });
};

// Fetch employee nationality by ID
export const getNationality = (req, res) => {
  const employeeId = req.params.employee_id;
  const sql = "call getFellNameAndCountry(?)";

  db.query(sql, [employeeId], (err, data) => {
    if (err) {
        console.log('done')
      console.error("Error fetching nationality:", err);
      return res.status(500).json({ error: "Error fetching nationality" });
    }
    res.json(data[0]);
  });
};

// Fetch employee pay grade by role ID
export const getPayGrade = (req, res) => {
  const employeeId = req.params.employee_id; // Replace with dynamic value if needed
  const sql ="call getPayDetails(?)";

  db.query(sql, [employeeId], (err, data) => {
    if (err) {
      console.error("Error fetching pay grade:", err);
      return res.status(500).json({ error: "Error fetching pay grade" });
    }
    res.json(data[0]);
  });
};

// Fetch emergency contact details for an employee
export const getEmergencyContact = (req, res) => {
  const employeeId = req.params.employee_id; // Replace with dynamic value if needed
  const sql = "call getEmergencyContact(?)";

  db.query(sql, [employeeId], (err, results) => {
    if (err) {
      console.error("Error fetching emergency contact details:", err);
      return res.status(500).json({ error: "Error fetching emergency contact details" });
    }
    res.json(results[0]);
  });
};


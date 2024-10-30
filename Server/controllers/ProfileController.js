import db from "../config/db.js";


// Fetch a specific employee by ID
export const getEmployee = (req, res) => {

  const employeeId = req.params.employee_id; // Replace with dynamic value if needed

  const sql = "SELECT * FROM Employee WHERE employee_id = ?";

  db.query(sql, [employeeId], (err, data) => {
    if (err) {
      console.error("Error fetching employee:", err);
      return res.status(500).json({ error: "Error fetching employee data" });
    }
    res.json(data);
  });
};

// Fetch employee details, including supervisor and role information
export const getEmployeeDetails = (req, res) => {
  const employeeId = req.params.employee_id; // Replace with dynamic value if needed
  const sql = `
    SELECT 
      e.employee_id, e.first_name, e.middle_name, e.last_name, e.birth_date, e.gender, e.marital_status, e.tel_no,
      e.company_work_email,
      sec.section_name,
      br.branch_name,
      emp_status.status_name,
      r.role_name,
      sup.first_name AS supervisor_first_name,
      sup.last_name AS supervisor_last_name
    FROM employee e
    LEFT JOIN section sec ON e.section_id = sec.section_id
    LEFT JOIN branch br ON e.branch_id = br.branch_id
    LEFT JOIN employmentstatus emp_status ON e.employment_status_id = emp_status.employment_status_id
    LEFT JOIN role r ON e.role_id = r.role_id
    LEFT JOIN supervisor s ON e.supervisor_id = s.supervisor_id
    LEFT JOIN employee sup ON s.employee_id = sup.employee_id
    WHERE e.employee_id = ?;
  `;

  db.query(sql, [employeeId], (err, data) => {
    if (err) {
      console.error("Error fetching employee details:", err);
      return res.status(500).json({ error: "Error fetching employee details" });
    }
    res.json(data);
  });
};

// Fetch employee nationality by ID
export const getNationality = (req, res) => {
  const employeeId = req.params.employee_id;
  const sql = `
    SELECT e.first_name, e.middle_name, e.last_name, b.country 
    FROM branch b
    JOIN employee e ON b.branch_id = e.branch_id 
    WHERE e.employee_id = ?;
  `;

  db.query(sql, [employeeId], (err, data) => {
    if (err) {
        console.log('done')
      console.error("Error fetching nationality:", err);
      return res.status(500).json({ error: "Error fetching nationality" });
    }
    res.json(data);
  });
};

// Fetch employee pay grade by role ID
export const getPayGrade = (req, res) => {
  const employeeId = req.params.employee_id; // Replace with dynamic value if needed
  const sql = `
    SELECT 
      pg.pay_grade_id, 
      pg.pay_grade_level_name
    FROM pay_grade pg
    JOIN role r ON pg.pay_grade_id = r.pay_grade_id
    WHERE r.role_id = (SELECT e.role_id FROM employee e WHERE e.employee_id = ?);
  `;

  db.query(sql, [employeeId], (err, data) => {
    if (err) {
      console.error("Error fetching pay grade:", err);
      return res.status(500).json({ error: "Error fetching pay grade" });
    }
    res.json(data);
  });
};

// Fetch emergency contact details for an employee
export const getEmergencyContact = (req, res) => {
  const employeeId = req.params.employee_id; // Replace with dynamic value if needed
  const sql = `
    SELECT *
    FROM emergencycontact
    RIGHT JOIN employee ON emergencycontact.emergency_contact_id = employee.emergency_contact_id
    WHERE employee.employee_id = ?;
  `;

  db.query(sql, [employeeId], (err, results) => {
    if (err) {
      console.error("Error fetching emergency contact details:", err);
      return res.status(500).json({ error: "Error fetching emergency contact details" });
    }
    res.json(results);
  });

};



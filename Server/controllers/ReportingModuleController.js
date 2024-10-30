import db from "../config/db.js";

export const getTotalLeaves = (req, res) => {
    const sql = "call GetApprovedLeavesByDepartment()";
  
    db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data[0]);
    });
  };

export  const getEmployees = (req, res) => {
    const sql = "call GetEmployeeDetails()";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  })

  };

// New endpoint to fetch employee details by role with grouped results

export const getEmployeesByRole = (req, res) => {
  const sql = "call GetEmployeeRoles()";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const getEmployeeReport = (req, res) => {
    const sql = "call GetEmployeeDepartmentRoleDetails()";
  
    db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data[0]);
    });
  };
  
  
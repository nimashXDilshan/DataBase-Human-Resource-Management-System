import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from "mysql2";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mindikalu1231",
  database: "HRMS_SD"
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/total_leaves', (req, res) => {
  const sql = `
    SELECT d.department_name,
           SUM(al.Approved_Annual_Leave_Count) AS Annual_Leaves,
           SUM(al.Approved_Casual_Leave_Count) AS Casual_Leaves,
           SUM(al.Approved_Maternity_Leave_Count) AS Maternity_Leaves,
           SUM(al.Approved_NoPay_Leave_Count) AS NoPay_Leaves
    FROM approved_leaves al
    JOIN employee e ON al.Employee_ID = e.employee_id
    JOIN department d ON e.section_id = d.department_id
    GROUP BY d.department_name
  `;

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get('/employee', (req,res) => {
  const sql = 
  "SELECT department_name, e.employee_id, first_name,middle_name, last_name, role_name, branch_name, status_name, pay_grade_level_name, salary_amount FROM employee e, department d, section s, role r, employmentstatus es, pay_grade pg, branch b, salary_record sr WHERE e.section_id = s.section_id AND s.department_id = d.department_id AND r.role_id = e.role_id AND es.employment_status_id = e.employment_status_id AND pg.pay_grade_id = r.pay_grade_id AND b.branch_id = e.branch_id AND sr.employee_id = e.employee_id";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })

})

// New endpoint to fetch employee details by role with grouped results
app.get('/employees_by_role', (req, res) => {
  const sql = `
    SELECT 
      employee.employee_id,
      employee.first_name,
      employee.last_name,
      role.role_name,
      role.role_description
    FROM 
      employee
    INNER JOIN 
      role ON employee.role_id = role.role_id
    GROUP BY 
      role.role_id, employee.employee_id, employee.first_name, employee.last_name
  `;

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get('/employee_report', (req,res) => {
  const sql = 
  "SELECT department_name, e.employee_id, first_name, role_name, branch_name, status_name, pay_grade_level_name, salary_amount FROM employee e, department d, section s, role r, employmentstatus es, pay_grade pg, branch b, salary_record sr WHERE e.section_id = s.section_id AND s.department_id = d.department_id AND r.role_id = e.role_id AND es.employment_status_id = e.employment_status_id AND pg.pay_grade_id = r.pay_grade_id AND b.branch_id = e.branch_id AND sr.employee_id = e.employee_id";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })

})

app.listen(5002, () => {
  console.log("Server is running on port 5002.");
});
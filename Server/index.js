import express from 'express';
import cors from 'cors';
import mysql2 from 'mysql2';
import bodyParser from 'body-parser';
import leaveRoutes from './routes/leaveRoutes.js';
import createUserAccount from './routes/CreateUserAccountRoute.js';
import loginAcconut from './routes/loginAcconutRoutes.js';

import approveLeaveRequest from './routes/AcceptLeavesSupervisorRoutes.js';


//import BranchForFillEmployeeDetails from './routes/BranchRoutes.js';

import employeeRoutes from './routes/employeeRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/leave', leaveRoutes); // Use the leave routes
app.use('/api/register', createUserAccount);
app.use('/api/login', loginAcconut);

app.use('/api/approveLeave', approveLeaveRequest);

//app.use('/api/branch',BranchForFillEmployeeDetails)

app.use('/api/employee', employeeRoutes);

//---------------------------------------------------------------------------------------------------

const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ra#A1381',
  database: 'jupitersimple'
});

app.get('/',(re,res)=>{
  return res.json("From Backend side");
})
//Personal Details Section
app.get('/Employee',(req,res)=>{
  const sql = "SELECT * FROM Employee WHERE employee_id = ?";
  const employeeId = 2; // Replace this with a dynamic value if needed
  db.query(sql, [employeeId], (err, data) => {
      if(err) return res.json(err);
      return res.json(data);
  })
})
//Employee Details Section
app.get('/EmployeeDetails', (req, res) => {
   const sql = `
     SELECT 
       e.employee_id, e.first_name, e.middle_name, e.last_name, e.birth_date, e.gender, e.marital_status, e.tel_no,
       e.company_work_email,  -- Added the work email field
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
     WHERE e.employee_id = ?;  -- Change this to the appropriate employee ID
   `;
   const employeeId = 2; // Replace this with a dynamic value if needed
   db.query(sql, [employeeId], (err, data) => {
       if (err) return res.json(err);
       console.log(data); // Debugging: Log the result to check if supervisor/role data is included
       return res.json(data);
   });
});
// Profile name and country section
app.get('/Nationality', (req, res) => {
  const sql = `
    SELECT e.first_name, e.middle_name, e.last_name, b.country 
    FROM branch b
    JOIN employee e ON b.branch_id = e.branch_id 
    WHERE e.employee_id = ?;
  `;
  const employeeId = 2; // Replace this with a dynamic value if needed
  db.query(sql, [employeeId], (err, data) => {
      if (err) {
          return res.status(500).json({ error: err });
      }
      res.json(data);
  });
});
// Paygrade Section
app.get('/PayGrade', (req, res) => {
  const sql = `
    SELECT 
      pg.pay_grade_id, 
      pg.pay_grade_level_name
    FROM paygrade pg
    JOIN role r ON pg.pay_grade_id = r.pay_grade_id
    WHERE r.role_id = (SELECT e.role_id FROM employee e WHERE e.employee_id = ?);
  `;
  const employeeId = 2; // Replace this with a dynamic value if needed
  db.query(sql, [employeeId], (err, data) => {
      if (err) return res.status(500).json({ error: err });
      res.json(data);
  });
});
// Emergency Contact Details Section
app.get('/EmergencyContact', (req, res) => {
  const employeeId = 2; // Set this to the employee ID you want to fetch
  
  const sql = `
    SELECT *
FROM emergencycontact
RIGHT JOIN employee ON emergencycontact.emergency_contact_id = employee.emergency_contact_id
WHERE employee.employee_id = 2;

  `;
  db.query(sql, [employeeId], (err, results) => {
      if (err) {
          console.error('Error fetching emergency contact details:', err);
          return res.status(500).json({ error: err.message });
      }
       return res.json(results);
  });
});
//--------------------------------------------------------------------------------------------------------------

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});

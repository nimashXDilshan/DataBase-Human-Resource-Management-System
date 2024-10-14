const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express()
app.use(cors());

 const db = mysql.createConnection({
     host:'localhost',
     user:'root',
    password:'mindikalu1231',
    database:'HRMS'
})

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
      FROM emergencycontact c
      WHERE c.emergency_contact_id = (
        SELECT e.emergency_contact_id
        FROM employee e
        WHERE e.employee_id = ?
      );
    `;

    db.query(sql, [employeeId], (err, results) => {
        if (err) {
            console.error('Error fetching emergency contact details:', err);
            return res.status(500).json({ error: err.message });
        }
        return res.json(results);
    });
});

app.listen(8081,()=>{
    console.log("listening");
})


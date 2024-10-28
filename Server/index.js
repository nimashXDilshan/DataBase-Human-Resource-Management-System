import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from "mysql";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Dulz@0216",
  database: "hrms_sd"
})

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (re,res) => {
  return res.json("From backend side");
})

app.get('/employee', (req,res) => {
  const sql = 
  "SELECT department_name, e.employee_id, first_name, role_name, branch_name, status_name, pay_grade_level_name, salary_amount FROM employee e, department d, section s, role r, employmentstatus es, pay_grade pg, branch b, salary_record sr WHERE e.section_id = s.section_id AND s.department_id = d.department_id AND r.role_id = e.role_id AND es.employment_status_id = e.employment_status_id AND pg.pay_grade_id = r.pay_grade_id AND b.branch_id = e.branch_id AND sr.employee_id = e.employee_id";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })

})

app.get('/employee_report', (req,res) => {
  const sql = 
  "SELECT department_name, e.employee_id, first_name, role_name, branch_name, status_name, pay_grade_level_name, salary_amount FROM employee e, department d, section s, role r, employmentstatus es, pay_grade pg, branch b, salary_record sr WHERE e.section_id = s.section_id AND s.department_id = d.department_id AND r.role_id = e.role_id AND es.employment_status_id = e.employment_status_id AND pg.pay_grade_id = r.pay_grade_id AND b.branch_id = e.branch_id AND sr.employee_id = e.employee_id";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })

})

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
})
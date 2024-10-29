import db from "../config/db.js";


export const getSalaryRecord = (req, res) => {
    const employeeId = req.params.employee_id;
    const sql = `
      SELECT 
    e.employee_id,
    e.first_name,
    e.middle_name,
    e.last_name,
    sr.date,
    sr.salary_amount,
    sr.remark
FROM 
    salary_record sr
JOIN 
    employee e ON sr.employee_id = e.employee_id
WHERE 
    e.employee_id = ?;

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

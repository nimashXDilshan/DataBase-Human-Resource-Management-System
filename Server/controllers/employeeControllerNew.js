import router from '../routes/employeeRoute.js';
import con from '../config/db.js';
import db from '../config/db.js'; // Assuming you have a database configuration file

// Function to add a new employee
const addEmployee = async (req, res) => {
  const {
    employeeId,
    firstName,
    middleName,
    lastName,
    birthDate,
    maritalStatus,
    gender,
    workEmail,
    address,
    telNo,
    recruitmentDate,
    emergencyContactName,
    emergencyContactAddress,
    emergencyContactPhone,
    sectionID,
    departmentID,
    branchID,
    supervisorID,
    employmentStatusID,
    roleID
  } = req.body;

  // Check for required fields
  if (!employeeId || !firstName || !lastName || !workEmail || !recruitmentDate) {
    return res.status(400).json({ message: 'Required fields are missing' });
  }

  // Insert employee data
  const queryEmployee = `
    INSERT INTO employee (
      employee_id,
      first_name,
      middle_name,
      last_name,
      birth_date,
      gender,
      marital_status,
      company_work_email,
      address,
      tel_no,
      recruitment_date,
      section_id,
      branch_id,
      supervisor_id,
      employment_status_id,
      role_id
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const employeeValues = [
    employeeId,
    firstName,
    middleName || null,
    lastName,
    birthDate || null,
    gender || null,
    maritalStatus || null,
    workEmail,
    address || null,
    telNo || null,
    recruitmentDate,
    sectionID || null,
    branchID || null,
    supervisorID || null,
    employmentStatusID || null,
    roleID || null
  ];


  db.query(queryEmployee, employeeValues, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Error saving the employee details', error: err });
    }

      res.status(201).json({ message: 'Employee added successfully', employeeId: employeeId });

  });
  // try {
  //   const [rows] = await db.query(queryEmployee, employeeValues);
  //   res.status(201).json({ message: 'Employee added successfully', employeeId: employeeId });
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({ message: 'Error saving the employee details', error: error });
  // }
};

export { addEmployee };


// Function to get all employees

const getAllEmployees = (req, res) => {
  const query = `
    SELECT * FROM employeeFullDetails
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Error fetching employees', error: err });
    }
    res.status(200).json(result);
  });
  // try {
  //   const [rows] = await db.query(query);
  //   res.status(200).json(rows);
  // } catch (error) {

  // }
};

export { getAllEmployees };



// Function to edit an employee
const editEmployee = (req, res) => {
  const { id } = req.params;
  const {
    employeeId,
    firstName,
    middleName,
    lastName,
    birthDate,
    maritalStatus,
    gender,
    workEmail,
    address,
    telNo,
    recruitmentDate,
    emergencyContactName,
    emergencyContactAddress,
    emergencyContactPhone,
    sectionID,
    departmentID,
    branchID,
    supervisorID,
    employmentStatusID,
    roleID
  } = req.body;

  const query = `
    UPDATE employee 
    SET first_name = ?, middle_name = ?, last_name = ?, birth_date = ?, gender = ?, marital_status = ?, 
    company_work_email = ?, address = ?, tel_no = ?, recruitment_date = ?, section_id = ?, branch_id = ?, 
    supervisor_id = ?, employment_status_id = ?, role_id = ?
    WHERE employee_id = ?
  `;

  const values = [
    firstName,
    middleName || null,
    lastName,
    birthDate || null,
    gender || null,
    maritalStatus || null,
    workEmail,
    address || null,
    telNo || null,
    recruitmentDate,
    sectionID || null,
    branchID || null,
    supervisorID || null,
    employmentStatusID || null,
    roleID || null,
    employeeId
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error updating employee', error: err });
    }
    res.status(200).json({ message: 'Employee updated successfully' });
  });
};

export { editEmployee };



const deleteEmployee = (req, res) => {
  const { id } = req.params;
  console.log(id);

  // Check if the employee exists
  const checkEmployeeQuery = `
    SELECT * FROM employee WHERE employee_id = ?
  `;

  db.query(checkEmployeeQuery, [id], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Error checking employee existence', error: err });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    // Delete related records one by one
    const deleteRelatedRecords = () => {
      const queries = [
        'DELETE FROM leave_request WHERE employee_id = ?',
        'DELETE FROM salary_record WHERE employee_id = ?',
        'DELETE FROM approved_leaves WHERE Employee_ID = ?',
        'DELETE FROM custom_employee_attributes WHERE employee_id = ?',
        'DELETE FROM user_account WHERE employee_id = ?'
      ];

      const runQuery = (index) => {
        if (index >= queries.length) {
          // Now delete the employee after deleting related records
          const deleteEmployeeQuery = 'DELETE FROM employee WHERE employee_id = ?';
          db.query(deleteEmployeeQuery, [id], (err) => {
            if (err) {
              console.log(err);
              return res.status(500).json({ message: 'Error deleting the employee', error: err });
            }
            return res.status(200).json({ message: 'Employee deleted successfully' });
          });
          return;
        }

        db.query(queries[index], [id], (err) => {
          if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error deleting related records', error: err });
          }
          runQuery(index + 1);
        });
      };

      // Start the first query
      runQuery(0);
    };

    deleteRelatedRecords();
  });
};

export { deleteEmployee };


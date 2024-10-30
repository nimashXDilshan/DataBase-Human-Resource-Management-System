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
  const queryEmployee = "call AddNewEmployee(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

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
    roleID || null,
    emergencyContactName || null,
    emergencyContactAddress || null,
    emergencyContactPhone || null
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

  const query = "call updateEmployee(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

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
  const checkEmployeeQuery = "call getEmployeeData(?)";

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
      const query = 'CALL deleteEmployee(?)';
    
      db.query(query, [id], (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ message: 'Error deleting the employee and related records', error: err });
        }
        return res.status(200).json({ message: 'Employee deleted successfully' });
      });
    };
    

    deleteRelatedRecords();
  });
};

export { deleteEmployee };


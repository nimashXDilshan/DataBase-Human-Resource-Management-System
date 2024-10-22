import db from '../config/db.js'; // Assuming you have a database configuration file

// Function to add a new employee
export const addEmployee = (req, res) => {
  const {
    firstName,
    middleName,
    lastName,
    birthDate,
    gender,
    maritalStatus,
    companyWorkEmail,
    address,
    telNo,
    recruitmentDate
  } = req.body;

  // Check for required fields
  if (!firstName || !lastName || !companyWorkEmail || !recruitmentDate) {
    return res.status(400).json({ message: 'Required fields are missing' });
  }

  const query = `
    INSERT INTO employees (
      firstName,
      middleName,
      lastName,
      birthDate,
      gender,
      maritalStatus,
      companyWorkEmail,
      address,
      telNo,
      recruitmentDate
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    firstName,
    middleName || null, // Use null if middleName is not provided
    lastName,
    birthDate || null, // Use null if birthDate is not provided
    gender || null, // Use null if gender is not provided
    maritalStatus || null, // Use null if maritalStatus is not provided
    companyWorkEmail,
    address || null, // Use null if address is not provided
    telNo || null, // Use null if telNo is not provided
    recruitmentDate
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error saving the employee details', error: err });
    }
    res.status(201).json({ message: 'Employee added successfully', employeeId: result.insertId });
  });
};

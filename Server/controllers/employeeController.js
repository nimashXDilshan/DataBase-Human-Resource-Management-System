import db from '../config/db'; // Assuming you have a database configuration file

// Function to add a new employee
exports.addEmployee = (req, res) => {
  const { name, email, jobTitle, department } = req.body;

  if (!name || !email || !jobTitle || !department) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const query = 'INSERT INTO employees (name, email, jobTitle, department) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, jobTitle, department], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error saving the employee details' });
    }
    res.status(201).json({ message: 'Employee added successfully', employeeId: result.insertId });
  });
};

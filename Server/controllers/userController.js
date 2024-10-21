import bcrypt from 'bcrypt';
import db from '../config/db.js'; // Assuming db.js exports a MySQL connection

// Login function
const loginUser = (req, res) => {
  const { email, password } = req.body;

  // Check if both email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // SQL query to search for the user by email
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Server error', error: err });
    }

    // If user does not exist
    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = results[0];

    // Compare passwords (if they are hashed)
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: 'Server error', error: err });
      }

      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // If login is successful, respond with user data (or token if implemented)
      res.status(200).json({ message: 'Login successful', user });
    });
  });
};

export { loginUser };

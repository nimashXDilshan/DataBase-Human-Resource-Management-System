import bcrypt from 'bcrypt';
import db from '../config/db.js'; // Assuming db.js exports a MySQL connection
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const jwt_secret = process.env.JWT_SECRET;

// Login function
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  console.log('Username:', username);

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    // Wrap db.query in a Promise to make it awaitable
    const results = await new Promise((resolve, reject) => {
      const sql = 'SELECT user_name, user_password, role_id, employee_id FROM user_details WHERE user_name = ?';
      db.query(sql, [username], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });

    console.log('Results:', results);

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = results[0];
    console.log('User:', user);

    // Compare passwords (if they are hashed)
    const isMatch = await bcrypt.compare(password, user.user_password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.user_id, username: user.user_name },
      jwt_secret,
      { expiresIn: '1h' }
    );
    console.log('Token:', token);

    const sendUser = {
      user_id: user.user_id,
      user_name: user.user_name,
      role_id: user.role_id,
      employee_id: user.employee_id
    }
    res.status(200).json({ message: 'Login successful', user: sendUser, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err });
  }
};

export { loginUser };

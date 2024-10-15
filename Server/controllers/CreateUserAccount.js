import bcrypt from 'bcrypt';
import db from "../config/db.js";

export const saveUser = async (req, res) => {
    try {
        const { email, password } = req.body; // Extract email and password from request body

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
        const values = [email, hashedPassword];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ message: 'Database error occurred' });
            }
            console.log('User account created successfully');
            res.status(201).json({ message: 'User registered successfully' });
        });
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ message: 'Server error occurred' });
    }
};

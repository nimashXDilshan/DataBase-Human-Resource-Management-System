import db from "../config/db.js"; // Adjust according to your DB configuration

export const getBranches = (req, res) => {
    const sql = 'SELECT id, name FROM branches'; // Replace 'name' with the actual column name for the branch

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Database error occurred' });
        }

        res.status(200).json(results); // Send back the list of branches
    });
};

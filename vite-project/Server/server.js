const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

// Create a connection pool to the MySQL database
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Ra#A1381",  // Ensure this password is correct
  database: "jupitersimple"         // Ensure the database name is correct
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Built-in middleware for parsing JSON

// Sample route to test database connection
app.get('/test-connection', (req, res) => {
  db.query('SELECT 1 + 1 AS solution', (err, result) => {
    if (err) {
      return res.status(500).send("Database connection failed.");
    }
    res.send({ message: "Database connection successful", result });
  });
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});

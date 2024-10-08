import express from 'express';
router = express.Router();
const router = express.Router();
const db = require('../dbconfig');

app.get("/", (req, res) => {
    const sqlGet = "SELECT * FROM leave_request ";
    db.query(sqlGet, (err, result) => {
        if (err) {
            console.log('Error');
        }
        res.json(result);
    });
});

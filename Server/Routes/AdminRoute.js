// import express from "express";
// import con from "../utils/db.js";
// import jwt from "jsonwebtoken";
// import bcrypt from 'bcrypt'
// import multer from "multer";
// import path from "path";

// router.post('/LeaveRequest', (req, res) => {
//     const sql = `INSERT INTO leave_request 
//         (leave_id, employee_id, leave_request_created_date_time, first_absence_date, leave_days_count,leave_type, reason, registration_no, leave_request_status) 
//         VALUES (?)`;

//     const values = [
//         req.body.leave_id, 
//         req.body.employee_id, 
//         req.body.leave_request_created_date_time, 
//         req.body.first_absence_date, 
//         req.body.leave_days_count,
//         req.body.leave_type, 
//         req.body.reason, 
//         req.body.registration_no, 
//         req.body.leave_request_status
//     ];

//     con.query(sql, values, (err, result) => {
//         if (err) return res.json({Status: false, Error: "Query Error"});
//         return res.json({Status: true});
//     });
// });


// import express from "express";
// import con from "../utils/db.js";

// const router = express.Router();

// router.post('/LeaveRequest', (req, res) => {
//     const sql = `INSERT INTO leave_request 
//         (leave_type, first_absence_date, last_absence_date, reason) 
//         VALUES (?, ?, ?, ?)`;

//     const values = [
//         req.body.leaveType, 
//         req.body.from_date, 
//         req.body.to_date, 
//         req.body.leaveReason
//     ];

//     con.query(sql, values, (err, result) => {
//         if (err) return res.json({Status: false, Error: "Query Error"});
//         return res.json({Status: true});
//     });
// });

// export default router;


import express from "express";
import con from "../utils/db.js";
import { v4 as uuidv4 } from 'uuid';

const AdminRouter = express.Router();

AdminRouter.post('/LeaveRequest', (req, res) => {
    const leaveId = uuidv4();  // Generate UUID for leave_id
    const currentDate = new Date();  // Get the current date and time for 'leave_request_created_date_time'

    // Calculate leave_days_count by getting the difference between 'from_date' and 'to_date'
    const fromDate = new Date(req.body.from_date);
    const toDate = new Date(req.body.to_date);
    const leaveDaysCount = Math.ceil((toDate - fromDate) / (1000 * 60 * 60 * 24)) + 1; // Including the last day

    // const sql = `INSERT INTO leave_request 
    //     (leave_id, employee_id, leave_request_created_date_time, first_absence_date, leave_days_count, leave_type, reason, registration_no, leave_request_status) 
    //     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const sql = `INSERT INTO leave_requests (id, fromDate, toDate, leaveReason) VALUES(?)`;

    const values = [
        // leaveId, 
        // req.body.employee_id, 
        // currentDate, 
        // req.body.from_date, 
        // leaveDaysCount, 
        // req.body.leaveType, 
        // req.body.leaveReason, 
        // req.body.registration_no, 
        // 'UN SEEN'  
        id,
        leaveType,
        fromDate,
        toDate,
        leaveReason
    ];

    con.query(sql, values, (err, result) => {
        if (err) return res.json({Status: false, Error: "Query Error"});
        return res.json({Status: true});
    });
});

export default AdminRouter;

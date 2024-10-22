import express from 'express';
import {addEmployee} from '../controllers/employeeController.js'; // Use ES module import

const router = express.Router();

// Login route
router.post('/',addEmployee);

export default router;

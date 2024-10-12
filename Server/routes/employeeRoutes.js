import express from'express';
import { addEmployee } from '../controllers/employeeController.js';

const router = express.Router();

// Route to add a new employee
router.post('/add-employee', addEmployee);

export default router;

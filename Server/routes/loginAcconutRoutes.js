import express from 'express';
import { loginUser } from '../controllers/userController.js'; // Use ES module import

const router = express.Router();

// Login route
router.post('/', loginUser);

export default router;

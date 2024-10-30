import express from 'express';
import { 
  getAllLeaveRequestEmployeeId, 
  
} from '../controllers/leaveRequestController.js';


const router = express.Router();

router.get('/:employee_id', getAllLeaveRequestEmployeeId);

export default router;

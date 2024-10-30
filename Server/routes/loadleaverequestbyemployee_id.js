import express from 'express';
import { 
  getLeaveRequestById, 
  
} from '../controllers/leaveRequestController.js';


const router = express.Router();

router.get('/:employee_id', getLeaveRequestById);

export default router;

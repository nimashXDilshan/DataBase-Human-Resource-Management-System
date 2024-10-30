import express from 'express';
import { 
  getUnseenLeaveRequests,
  
} from '../controllers/AcceptandChangeStatusSupervisor.js';
const router = express.Router();

router.get('/:employee_id',getUnseenLeaveRequests);



export default router;
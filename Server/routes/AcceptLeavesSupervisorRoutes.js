import express from 'express';
import { 
  getUnseenLeaveRequests,
  getUpdatedData 
} from '../controllers/AcceptandChangeStatusSupervisor.js';
const router = express.Router();
router.get('/',getUnseenLeaveRequests);
router.put('/:id', getUpdatedData); // Use PUT for updating

export default router;
import express from 'express';
import { 
  getAllLeaveRequests, 
  createLeaveRequest, 
  deleteLeaveRequest, 
  getLeaveRequestById, 
  updateLeaveRequest 
} from '../controllers/leaveRequestController.js';


const router = express.Router();

router.get('/', getAllLeaveRequests);
router.post('/', createLeaveRequest);
router.delete('/:id', deleteLeaveRequest);

router.get('/:id', getLeaveRequestById);

router.put('/:id', updateLeaveRequest);

export default router;

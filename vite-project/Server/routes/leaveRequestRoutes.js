import express from 'express';
import { getLeaveRequests, addLeaveRequest, deleteLeaveRequest, updateLeaveRequest } from './controllers/leaveController.js';

const router = express.Router();

router.get('/leave-requests', getLeaveRequests);
router.post('/leave-requests', addLeaveRequest);
router.delete('/leave-requests/:id', deleteLeaveRequest);
router.put('/leave-requests/:id', updateLeaveRequest);

export default router;

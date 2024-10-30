import express from 'express';
import { 
  
  getUpdatedData ,
} from '../controllers/AcceptandChangeStatusSupervisor.js';
const router = express.Router();

router.put('/:leave_id', getUpdatedData); // Use PUT for updating

export default router;
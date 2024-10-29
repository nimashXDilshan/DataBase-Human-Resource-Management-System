import express from 'express';
import { 
  
  getLeaveRequestById, 
  
} from '../controllers/leaveRequestController.js';


const router = express.Router();

router.get('/:id', getLeaveRequestById);


export default router;
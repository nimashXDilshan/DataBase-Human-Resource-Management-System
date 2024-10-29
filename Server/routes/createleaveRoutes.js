import express from 'express';
import { 
  
  createLeaveRequest, 
  
} from '../controllers/leaveRequestController.js';


const router = express.Router();


router.post('/', createLeaveRequest);



export default router;

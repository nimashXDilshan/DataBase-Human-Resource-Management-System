import express from 'express';
import { 
  
  deleteLeaveRequest, 

} from '../controllers/leaveRequestController.js';


const router = express.Router();


router.delete('/:id', deleteLeaveRequest);


export default router;

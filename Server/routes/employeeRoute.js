import express from'express';
import {addEmployee} from '../controllers/employeeControllerNew.js';
import {getAllEmployees} from '../controllers/employeeControllerNew.js';
import { editEmployee } from '../controllers/employeeControllerNew.js';
import { deleteEmployee } from '../controllers/employeeControllerNew.js'; 


const router = express.Router();

router.post('/', addEmployee);
router.get('/', getAllEmployees);
router.put('/:id', editEmployee);
router.delete('/:id', deleteEmployee);


router.get('/test', (req, res) => {
    res.send('Employee route is working');
});

export default router;

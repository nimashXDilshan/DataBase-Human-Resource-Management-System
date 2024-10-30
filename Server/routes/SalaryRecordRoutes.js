import express from "express";
import {
 
    getSalaryRecord
 
} from "../controllers/SalaryRecordController.js";

const router = express.Router();

router.get("/:employee_id",getSalaryRecord);


export default router;

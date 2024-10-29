import express from "express";
import {
 
    getEmployeeDetails,
  
} from "../controllers/ProfileController.js";

const router = express.Router();


router.get("/:employee_id",getEmployeeDetails);

export default router;

import express from "express";
import {
 
  getEmployee,
  
} from "../controllers/ProfileController.js";

const router = express.Router();


router.get("/:employee_id",getEmployee);

export default router;

import express from "express";
import {
    
    getEmployeesByRole,
   
} from "../controllers/ReportingModuleController.js";

const router = express.Router();



router.get("/", getEmployeesByRole);


export default router;
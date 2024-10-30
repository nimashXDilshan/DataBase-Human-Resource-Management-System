import express from "express";
import {
    
    getEmployeeReport
} from "../controllers/ReportingModuleController.js";

const router = express.Router();



router.get("/", getEmployeeReport);

export default router;
import express from "express";
import {
  
    getEmployees,
    
} from "../controllers/ReportingModuleController.js";

const router = express.Router();

router.get("/", getEmployees);

export default router;
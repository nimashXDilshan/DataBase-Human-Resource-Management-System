import express from "express";
import {
    getTotalLeaves,
    
} from "../controllers/ReportingModuleController.js";

const router = express.Router();


router.get("/", getTotalLeaves);


export default router;
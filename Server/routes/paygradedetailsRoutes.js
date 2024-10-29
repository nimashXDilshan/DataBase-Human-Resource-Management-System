import express from "express";
import {
 
  getPayGrade
 
} from "../controllers/ProfileController.js";

const router = express.Router();

router.get("/:employee_id",getPayGrade);


export default router;

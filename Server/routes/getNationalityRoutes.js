import express from "express";
import {
  
  getNationality
  
} from "../controllers/ProfileController.js";

const router = express.Router();


router.get("/:employee_id", getNationality);


export default router;

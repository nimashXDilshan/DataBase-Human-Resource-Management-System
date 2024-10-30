import express from "express";
import {
  getEmergencyContact,
} from "../controllers/ProfileController.js";

const router = express.Router();


router.get("/:employee_id",getEmergencyContact);


export default router;

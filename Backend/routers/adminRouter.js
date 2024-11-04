import { Router } from "express";
import {createdealer} from '../controllers/adminController.js';
import express from "express";
import { verifyToken } from "../controllers/Verifyuser.js";
const router = express.Router();

router.post('/createdealer',verifyToken,createdealer);

export default router;
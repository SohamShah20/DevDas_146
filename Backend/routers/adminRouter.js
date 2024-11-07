import { Router } from "express";
import {createdealer, setPrice} from '../controllers/adminController.js';
import express from "express";
import { verifyToken } from "../controllers/Verifyuser.js";
const router = express.Router();

router.post('/createdealer',verifyToken,createdealer);
router.post('/setprice', setPrice);

export default router;
import { Router } from "express";
import {request} from '../controllers/customerController.js';
import express from "express";
import { verifyToken } from "../controllers/Verifyuser.js";
const router = express.Router();

router.post('/request',verifyToken,request);

export default router;
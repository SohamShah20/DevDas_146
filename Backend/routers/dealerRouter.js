import { Router } from "express";
import {getrequests} from '../controllers/dealerController.js';
import express from "express";
import { verifyToken } from "../controllers/Verifyuser.js";
const router = express.Router();

router.get('/getrequests/:id',verifyToken,getrequests);

export default router;
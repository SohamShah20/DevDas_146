import { Router } from "express";
import {createdealer, setPrice,getdealers,dealeradmin} from '../controllers/adminController.js';
import express from "express";
import { verifyToken } from "../utils/Verifyuser.js";
const router = express.Router();

router.post('/createdealer',verifyToken,createdealer);
router.post('/setprice', setPrice);
router.get('/getdealers', getdealers);
router.get('/dealeradmin/:id', dealeradmin);

export default router;
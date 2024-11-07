import { Router } from "express";
import {getrequests,acceptrequests,getacceptedrequests} from '../controllers/dealerController.js';
import express from "express";
import { verifyToken } from "../controllers/Verifyuser.js";
const router = express.Router();

router.get('/getrequests/:id',getrequests);
router.put('/acceptrequests/:id',verifyToken,acceptrequests);
router.get('/getacceptedrequests/:id',getacceptedrequests);
export default router;
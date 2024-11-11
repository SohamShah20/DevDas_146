import { Router } from "express";
import {getrequests,acceptrequests,getacceptedrequests,genreceipt,getclosedrequests,getfeedbacks} from '../controllers/dealerController.js';
import express from "express";
import { verifyToken } from "../utils/Verifyuser.js";
const router = express.Router();

router.get('/getrequests/:id',getrequests);
router.put('/acceptrequests/:id',verifyToken,acceptrequests);
router.post('/genreceipt/:id',verifyToken,genreceipt);
router.get('/getacceptedrequests/:id',getacceptedrequests);
router.get('/getclosedrequests/:id',getclosedrequests);
router.get('/getfeedbacks/:id', getfeedbacks);
export default router;
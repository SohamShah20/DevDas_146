import { Router } from "express";
<<<<<<< Updated upstream
import {request, feedback,getacceptedrequests,getrequests,getdealer} from '../controllers/customerController.js';
=======
import {request,getacceptedrequests,getrequests,getdealer,payreceived} from '../controllers/customerController.js';
>>>>>>> Stashed changes
import express from "express";
import { verifyToken } from "../controllers/Verifyuser.js";
const router = express.Router();

router.post('/request',verifyToken,request);
router.put('/payreceived/:id',verifyToken,payreceived);
router.get('/getrequests/:id',getrequests);
router.get('/getdealer/:id',getdealer);
router.get('/getacceptedrequests/:id',getacceptedrequests);
router.post('/feedback/:id', feedback);
export default router;
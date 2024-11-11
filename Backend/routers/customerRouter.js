import { Router } from "express";


import {request,getacceptedrequests,getrequests,getdealer,payreceived, feedback,getclosedrequests,getbill,getDealerFromRequest} from '../controllers/customerController.js';

import express from "express";
import { verifyToken } from "../controllers/Verifyuser.js";
const router = express.Router();

router.post('/request',verifyToken,request);
router.put('/payreceived/:id',verifyToken,payreceived);
router.get('/getrequests/:id',getrequests);
router.get('/getdealer/:id',getdealer);
router.get('/getacceptedrequests/:id',getacceptedrequests);
router.get('/getclosedrequests/:id',getclosedrequests);
router.get('/getbill/:id',getbill);
router.post('/feedback/:id',verifyToken, feedback);
router.get('/getDealerFromRequest/:req_id', getDealerFromRequest);
export default router;
import { Router } from "express";
import {getrequests} from '../controllers/dealerController.js';
import express from "express";
const router = express.Router();

router.get('/getrequests/:id',getrequests);

export default router;
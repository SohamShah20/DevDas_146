import Dealer from '../models/dealer.model.js'
import bcryptjs from 'bcryptjs';

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export async function createdealer(req,res,next){
    
    const {username, email, password,address} =req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const validUser = await Dealer.findOne({ email });
    if (validUser) return res.status(404).send('Dealer exists!');
    const validUser1 = await Dealer.findOne({ username });
    if (validUser1) return res.status(404).send('Dealer exists!');
    const newcust = new Dealer({ username, email, password: hashedPassword,address });
  try {
    await newcust.save();
    res.status(201).json('Dealer created successfully!');
  } catch (error) {
    next(error);
  }
  
}
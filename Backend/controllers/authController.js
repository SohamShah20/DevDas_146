import Customer from '../models/customer.model.js';
import Dealer from '../models/dealer.model.js';
import bcryptjs from 'bcryptjs';

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const signup = async (req, res, next) => {

  const { username, email, password,address,isadmin,city } = req.body;


    const hashedPassword = bcryptjs.hashSync(password, 10);
  
 
    const validUser = await Customer.findOne({ email });
    const validUser2 = await Dealer.findOne({ email });
    if (validUser || validUser2) return res.status(404).send('User exists!');
    const validUser1 = await Customer.findOne({ username });
    const validUser3 = await Dealer.findOne({ username });
    if (validUser1 || validUser3) return res.status(404).send('User exists!');
    const newcust = new Customer({ username, email, password: hashedPassword,address,isadmin,city });
  try {
    await newcust.save();
    res.status(201).json('User created successfully!');
  } catch (error) {
    next(error);
  }
 

  
 

  
};

export const signin = async (req, res, next) => {
  const { email, password} = req.body;
  const iscust=req.body.iscust;
  if(iscust){
    try {
        const validUser = await Customer.findOne({ email });
        
        if (!validUser) return res.status(404).send('User not found!');
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return res.status(404).send('Wrong Credentials!');
        const token = jwt.sign({ id: validUser._id },process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;
        res
          .cookie('access_token', token, { httpOnly: true })
          .status(200)
          .json(rest);
      } catch (error) {
        next(error);
      }
  }

  else{
    try {
      const validUser = await Dealer.findOne({ email });
      if (!validUser) return res.status(404).send('User not found!');
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) return res.status(404).send('Wrong Credentials!');
      const token = jwt.sign({ id: validUser._id },process.env.JWT_SECRET);
      const { password: pass, ...rest } = validUser._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } catch (error) {
      next(error);
    }
  }
  
};


export const signOut = async (req, res, next) => {
  try {
    res.clearCookie('access_token');
    res.status(200).json('User has been logged out!');
  } catch (error) {
    next(error);
  }
};
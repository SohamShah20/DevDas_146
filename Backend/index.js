import express from 'express';
import dbconnect  from './database/config.js';
 import customerRouter from './routers/customerRouter.js';
 import dealerRouter from './routers/dealerRouter.js';
import adminRouter from './routers/adminRouter.js';
import authRouter from './routers/authRouter.js';
import userRouter from './routers/userRouter.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import jwt from 'jsonwebtoken';
import Customer from './models/customer.model.js';
import Dealer from './models/dealer.model.js';
import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs';
dbconnect();


const app=express();

app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true, 
  };
  app.use(cors(corsOptions));
app.use((req, res, next) => { res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, credentials'); 
    next(); });

    
app.use('/api/auth',authRouter);
app.use('/api/customer',customerRouter);
 app.use('/api/dealer',dealerRouter);
app.use('/api/admin',adminRouter);
app.use('/api',userRouter);
app.post('/forgot-password',async (req, res) => {
    const {email} = req.body;
    const d= await Dealer.findOne({email});
    
   
    if(d){
        Dealer.findOne({email: email})
        .then(user => {
            if(!user) {
                return res.send({Status: "User not existed"})
            } 
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"})
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'scrapdealer31@gmail.com',
                  pass: process.env.PASS
                }
              });
              
              var mailOptions = {
                from: 'scrapdealer31@gmail.com',
                to: email,
                subject: 'Reset Password Link',
                text: `http://localhost:3000/reset_password/${user._id}/${token}`
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  return res.send({Status: "Success"})
                }
              });
        })
    }
    else {
        Customer.findOne({email: email})
        .then(user => {
            if(!user) {
                return res.send({Status: "User not existed"})
            } 
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"})
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'scrapdealer31@gmail.com',
                  pass: process.env.PASS
                }
              });
              
              var mailOptions = {
                from: 'scrapdealer31@gmail.com',
                to: email,
                subject: 'Reset Password Link',
                text: `http://localhost:3000/reset_password/${user._id}/${token}`
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  return res.send({Status: "Success"})
                }
              });
        })
    }
   
})

app.post('/reset-password/:id/:token',async (req, res) => {
    const {id, token} = req.params
    const {password} = req.body
const d=await Dealer.findById(id);

if(d){
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) {
            return res.json({Status: "Error with token"})
        } else {
            bcryptjs.hash(password, 10)
            .then(hash => {
               Dealer.findByIdAndUpdate(id, {password: hash})
                .then(u => res.send({Status: "Success"}))
                .catch(err => res.send({Status: err}))
            })
            .catch(err => res.send({Status: err}))
        }
    })
}

else{
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) {
            return res.json({Status: "Error with token"})
        } else {
            bcryptjs.hash(password, 10)
            .then(hash => {
                Customer.findByIdAndUpdate(id, {password: hash})
                .then(u => res.send({Status: "Success"}))
                .catch(err => res.send({Status: err}))
            })
            .catch(err => res.send({Status: err}))
        }
    })
}
})


app.listen(process.env.PORT,()=>{
   
    console.log("server is running");
})




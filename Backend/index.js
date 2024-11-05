import express from 'express';
import dbconnect  from './database/config.js';
 import customerRouter from './routers/customerRouter.js';
 import dealerRouter from './routers/dealerRouter.js';
import adminRouter from './routers/adminRouter.js';
import authRouter from './routers/authRouter.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
dbconnect();


const app=express();

app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent
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
app.listen(process.env.PORT,()=>{
   
    console.log("server is running");
})




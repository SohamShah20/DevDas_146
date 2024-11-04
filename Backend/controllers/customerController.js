
import Request from '../models/request.model.js'

export async function request(req,res,next){
    const {address,custname,date,time,email}=req.body;
   const times=time.toString();
    const dates=date.toString();
    const newcust = new Request({address,custname,date:dates,time:times,email});
    try {
        await newcust.save();
        res.status(201).json('request made successfully!');
      } catch (error) {
        next(error);
      }
}
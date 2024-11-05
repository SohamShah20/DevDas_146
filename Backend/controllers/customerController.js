
import Request from '../models/request.model.js'

export async function request(req,res,next){
    const {city,custname,date,time,email,scrapData}=req.body;
   const times=time.toString();
    const dates=date.toString();
    const newcust = new Request({city,custname,date:dates,time:times,email,scrapData});
    try {
        await newcust.save();
        res.status(201).json('request made successfully!');
      } catch (error) {
        next(error);
      }
}
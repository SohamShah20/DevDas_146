import Feedback from '../models/feedback.model.js';
import Request from '../models/request.model.js'
import Customer from '../models/customer.model.js'
import Dealer from '../models/dealer.model.js';
import Bill from '../models/bill.model.js';
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

export async function getrequests(req,res,next){
  const id=req.params.id;
  const dealer= await Customer.findById(id);
  
  try
  {const requests=await Request.find({city:dealer.city,status:"PENDING",email:dealer.email});
  return res.status(200).json(requests);}
  catch(error){
      return res.status(404).json(error);
  }
  }
  
  export async function getacceptedrequests(req,res,next){
      const id=req.params.id;
      const dealer= await Customer.findById(id);
      
      try
      {const requests=await Request.find({city:dealer.city,status:"ACCEPTED",email:dealer.email});
      return res.status(200).json(requests);}
      catch(error){
          return res.status(404).json(error);
      }
      }


      export async function getdealer(req,res,next){
        const id=req.params.id;
       
        
        try
        { const dealer= await Dealer.findById(id);
        return res.status(200).json(dealer);}
        catch(error){
            return res.status(404).json(error);
        }
        }

        export async function getDealerFromRequest(req, res, next){
          const id = req.params.req_id;
          try{
            const request = await Request.findById(id);
            if(!request){
              console.log('No request!');
              return res.status(404).json({error: 'request not found'});
            }
            const dealer = await Dealer.findById(request.dealer_id);
            return res.status(200).json(dealer);
          }catch(error){
            return res.status(404).json(error);
          }
        }


        export async function feedback(req, res, next){
          const {customer, dealer, rating, description} = req.body;
          const request_id = req.params.id;
          const request = await Request.findByIdAndUpdate(request_id, {givenFeedback: true});
          const valid_id = await Feedback.findOne({ request_id });
          if(valid_id) return res.status(404).send('feedback already provided!');
          const newFeedback = new Feedback({request_id, customer, dealer, rating, description});
          try{
            await newFeedback.save();
            res.status(201).json('feedback submitted successfully!');
          } catch(error){
            next(error);
          }
        };

        export async function payreceived(req,res,next){
          const id=req.params.id;
         
          
          try
          { const dealer= await Request.findByIdAndUpdate(id,{cangenreceipt:true});
          return res.status(200).json(dealer);}
          catch(error){
              return res.status(404).json(error);
          }
          }

          export async function getclosedrequests(req,res,next){
            const id=req.params.id;
            const customer= await Customer.findById(id);
            
            try
            {const requests=await Request.find({city:customer.city,status:"CLOSED",email:customer.email});
            return res.status(200).json(requests);}
            catch(error){
                return res.status(404).json(error);
            }
            }

            export async function getbill(req,res,next){
              const id=req.params.id;
             
              
              try
              { const dealer= await Bill.findOne({req_id:id});
              return res.status(200).json(dealer);}
              catch(error){
                  return res.status(404).json(error);
              }
              }
import Dealer from "../models/dealer.model.js";
import Request from "../models/request.model.js";

export async function getrequests(req,res,next){
const id=req.params.id;
const dealer= await Dealer.findById(id);

try
{const requests=await Request.find({city:dealer.city,status:"PENDING"});
return res.status(200).json(requests);}
catch(error){
    return res.status(404).json(error);
}
}

export async function getacceptedrequests(req,res,next){
    const id=req.params.id;
    const dealer= await Dealer.findById(id);
    
    try
    {const requests=await Request.find({city:dealer.city,status:"ACCEPTED",dealer_id:id});
    return res.status(200).json(requests);}
    catch(error){
        return res.status(404).json(error);
    }
    }
export async function acceptrequests(req,res,next){
    const id=req.params.id;
   
    
   try{  await Request.findByIdAndUpdate(id,{status:"ACCEPTED",dealer_id:req.user.id});
   console.log("ho gya kaam!!!!")
        return res.status(201).json('ACCEPTED');
}
catch(error){
 
        if(err)return res.status(500).json(err);
        
}
   

}
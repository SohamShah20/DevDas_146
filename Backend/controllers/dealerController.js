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


export async function genreceipt(req,res,next){
    const id=req.params.id;
   const request=await Request.findById(id);

  try{ await Request.findByIdAndUpdate(id,{status:"CLOSED"});}
  catch(err){
    return res.status(404).send('status cant be changed');
  }
   const dealer=await Dealer.findById(request.dealer_id);
   const bill=await Bill.findOne({req_id:id});
   if(bill){
    return res.status(404).send('receipt already made!!')
   }
    const data=[];
    const scrapData=request.scrapData;
    const gtotal=0;

 async function findrate(type){
    const scrap=await Scrap.findOne({type}); 
   return scrap.price;
 }
    scrapData.map((scarp,index)=>{
      const rpu=findrate(scrap.type);
      const quantity=scrap.quantity;
      const rate=rpu*quantity;
      const obj={
        type:scrap.type,
        quantity:scrap.quantity,
        rateperunit:rpu,
        total:rate
      }
      data.push(obj);
      gtotal+=rate;
    })
   
  const newbill= new Bill({
    custname:request.custname,
    dealername:dealer.username,
    gtotal,
    scrapdata:data,
    req_id:id
     });

     try{
       await newbill.save();
      return res.status(200).json('bill created!!');
     }
     catch(err){
       return res.status(404).json(err);
     }

}
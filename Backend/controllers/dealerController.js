import Dealer from "../models/dealer.model.js";
import Request from "../models/request.model.js";

export async function getrequests(req,res,next){
const id=req.params.id;
const dealer= await Dealer.findById(id);

try
{const requests=await Request.find({address:dealer.address});
return res.status(200).json(requests);}
catch(error){
    return res.status(404).json(error);
}
}
import mongoose from 'mongoose';
const scrapSchema = new mongoose.Schema({
  
  type: String,
  quantity: Number,
 
        rateperunit:Number,
        total:Number
});
const BillSchema = new mongoose.Schema(
  {
    custname: {
      type: String,
  
     
    },
 
    dealername: {
        type: String,
       
       
      },
     
     scrapdata: {
        type: [scrapSchema],
        
      },
      gtotal:{type:Number,},
     
      
  
   
  
    req_id:{
        type:String,
    }
  },
  { timestamps: true }
);

const Bill = mongoose.model('Bill', BillSchema);

export default Bill;

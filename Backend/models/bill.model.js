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
      gtotal:{Number,},
     
      
  
   
  
    req_id:{
        String,
    }
  },
  { timestamps: true }
);

const Bill = mongoose.model('Bill', BillSchema);

export default Bill;

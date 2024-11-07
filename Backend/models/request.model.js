import mongoose from 'mongoose';
const scrapSchema = new mongoose.Schema({
  
  type: String,
  quantity: Number,
});
const RequestSchema = new mongoose.Schema(
  {
    custname: {
      type: String,
      required: true,
     
    },
    email: {
      type: String,
      required: true,
     
    },
    cangenreceipt: {
      type: Boolean,
      default:false,
    },
    city: {
      type: String,
      required: true,
     
    },
    dealer_id: {
      type: String,
      default: ""
    },
      date: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
     scrapData: {
        type: [scrapSchema],
        required: true,
      },
      status:{
        type: String,
        default: "PENDING"
      },
  },
  { timestamps: true }
);

const Request = mongoose.model('Request', RequestSchema);

export default Request;

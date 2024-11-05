import mongoose from 'mongoose';
const scrapSchema = new mongoose.Schema({
  
  type: String,
  quantity: String,
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
  
    city: {
      type: String,
      required: true,
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
  },
  { timestamps: true }
);

const Request = mongoose.model('Request', RequestSchema);

export default Request;

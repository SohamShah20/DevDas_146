import mongoose from 'mongoose';

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
  
    address: {
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
  },
  { timestamps: true }
);

const Request = mongoose.model('Request', RequestSchema);

export default Request;

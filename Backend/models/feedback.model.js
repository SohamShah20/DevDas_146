import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema(
    {
        request_id: {
            type: String,
            required: true,
            unique: true,
        },
        customer: {
            type: String,
            required: true,
        },
        dealer: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            default: "",
        }
    },
    { timestamps: true }
);

const Feedback = mongoose.model('Feedback', FeedbackSchema);

export default Feedback;
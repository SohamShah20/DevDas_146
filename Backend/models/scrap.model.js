import mongoose from "mongoose";

const ScrapSchema = new mongoose.Schema(
    {
        isScrap: {
            type: Boolean,
            default: true,
        },
        type: {
            type: String,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            required: true
        }
    }
)

const Scrap = mongoose.model('Scrap', ScrapSchema);

export default Scrap;
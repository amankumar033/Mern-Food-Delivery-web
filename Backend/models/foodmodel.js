import mongoose from "mongoose"

const foodSchema=new mongoose.Schema({
 


const foodModel = mongoose.models.food || mongoose.model("food",foodSchema);

export default foodModel;
import mongoose from "mongoose";
 
export const connectDB =async () =>{
    await mongoose.connect('mongodb+srv://kalilinux:908454@cluster0.47hqc.mongodb.net/food-del').then(()=>{console.log("DB Connected")});
} 
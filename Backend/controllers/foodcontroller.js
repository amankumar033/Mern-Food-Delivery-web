import foodModel from "../models/foodmodel.js";
import fs from 'fs'


// add food item

const  addFood = async(req,res)=>{
        let image_filename=`${req.file.filename}`;
        const food=new foodModel({
            name:req.body.name,
            price:req.body.price,
            category:req.body.category,
            description:req.body.description,
            image:image_filename
        })
        try{
            await food.save();
            res.json({success:true,message:"Food Added"})
        }
        catch(error){
            console.log(error)
            res.json({success:false,message:"Error"})
        }
        
}
// all food list
const listFood = async (req,res)=>{
         try{
             const foods = await foodModel.find({});
             res.json({success:true,data:foods})
         }
         catch(error){
              console.log(error);
              res.json({success:false,message:'Error'})
         }
}
// remove food item
const removeFood =async (req,res)=>{
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`upload/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id);

        res.json({success:true,data:food})

    }
    catch(error){
         console.log(error);
         res.json({success:false,message:'Error'})
    }
}



export{addFood,listFood,removeFood}
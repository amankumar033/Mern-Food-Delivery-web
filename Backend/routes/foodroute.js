import express from 'express'
import { addFood,listFood,removeFood } from '../controllers/foodcontroller.js'
import multer from "multer"

const foodRouter =express.Router();

// Image storage Engine

const storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
         return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})





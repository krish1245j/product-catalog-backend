import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Product name is required"]
    },
    category:{
        type:String,
        enum:["Electronics","Clothing","Sports","Books","Food"],
        required:[true,"category of product is required"]
    },
    price:{
        type:Number,
        min:[0,"Price cannot be negative"],
        required:[true,["Price for the product is required"]]
    }
},{timestamps:true})
productSchema.index({ createdAt: -1, _id: -1 });
productSchema.index({ category: 1, createdAt: -1, _id: -1 });

const productModel=mongoose.model("product",productSchema);

export default productModel;
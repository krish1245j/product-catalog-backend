import productModel from "../models/products.model.js";
import mongoose from "mongoose";
export async function listProduct(req,res) {
    const{name,category,price}=req.body;
    if(!name||!category||price=== undefined){
        return res.status(400).json({
            message:"Name,Category and prices are required"
        })
    }

    const product=await productModel.create({
        name,
        category,
        price
    })

    return res.status(201).json({
        message:"Product listed sucessfully",
        product:{
            name:product.name,
            category:product.category,
            price:product.price
        }
    })
}

export async function showProducts(req,res){
    const {category}=req.query;
    const limit=Number(req.query.limit) || 10;
    const { cursor } = req.query;
    let filter={}
    if(category){
        filter.category=category;
    }
    if(cursor){
    filter._id = {
        $lt: new mongoose.Types.ObjectId(cursor)
    };
}
    const products=await productModel.find(filter).sort({ createdAt: -1, _id: -1 }).limit(limit);
    if(products.length===0){
        return res.status(200).json({
            products:[]
        })
    }
    
    const nextCursor = products.length > 0 ? products[products.length-1]._id : null;
    return res.status(200).json({
        message:"All products :",
        products,
        nextCursor
    })
}
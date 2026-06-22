// import productModel from "../models/products.model.js";
// import { connectDb } from "../config/db.js";

// await connectDb();

// const categories = [
//   "Electronics",
//   "Books",
//   "Sports",
//   "Clothing",
//   "Food"
// ];


// let count = 1;

// for(let batch=0; batch<20; batch++){

//    const products=[];

//    for(let i=0; i<10000; i++){

//       products.push({
//          name:`Product ${count}`,
//          category: categories[Math.floor(Math.random()*categories.length)],
//          price: Math.floor(Math.random()*10000)+100
//       });

//       count++;
//    }

//    await productModel.insertMany(products);

//    console.log(`Batch ${batch+1} inserted`);
// }

// console.log("200000 products inserted successfully");
// process.exit();
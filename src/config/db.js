import config from "./config.js";
import mongoose from "mongoose";

export async function connectDb() {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("Connedted to DB")
    } catch (err) {
        console.log(err)
    }
}
import express from "express"
import cors from "cors";
import morgan from "morgan"
import productRouter from "./routes/product.routes.js";
const app=express();
app.use(cors({
    origin: ["http://localhost:5173",
    "https://product-catalog-frontend-eight.vercel.app"
    ]
    
}));
app.use(express.json())
app.use(morgan("dev"));
app.use("/api",productRouter);
export default app;

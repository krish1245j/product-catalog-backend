import { Router } from "express";
import * as productController from "../controller/product.controller.js"
const productRouter=Router()

productRouter.post("/list",productController.listProduct);
productRouter.get("/products",productController.showProducts)

export default productRouter;
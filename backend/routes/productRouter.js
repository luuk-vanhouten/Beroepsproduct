import express from "express";
import productController from "../controllers/productController.js";

const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/:name", productController.getProductsByName);
router.get("/:product_id", productController.getProductsById);
router.get("/:category_name", productController.getProductsByCategory);

export default router;

import express from "express";
import itemController from "../controllers/productController.js";

const { getProducts, getNameProducts, getIdProducts } = itemController;
const { getCategoryProducts, getNameCategory } = itemController;

const router = express.Router();
let classes = {};

router.get("/", getProducts);
router.get("/category/:category_id", getCategoryProducts);
router.get("/category/:category_name", getNameCategory);
router.get("/product/:product_id", getIdProducts);
router.get("/product/:product_name", getNameProducts);

export default router;

import express from "express";
import itemController from "../controllers/productController.js";

const { getProducts, getNameProducts, getIdProducts } = itemController;
const { getCategoryProducts, getNameCategory } = itemController;

const router = express.Router();
let products = {};

router.get("/", getProducts);
router.get("/:name", getNameProducts);
router.get("/:product_id", getIdProducts);
router.get("/:category_id", getCategoryProducts);
router.get("/:category_name", getNameCategory);

export default router;

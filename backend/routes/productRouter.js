import express from "express";
import productController from "../controllers/productController.js";

const router = express.Router();

router.get("/all", productController.getAllProducts);
router.get("/name/:name", productController.getProductsByName);
router.get("/id/:id", productController.getProductsById);
router.get("/category/:category_name", productController.getProductsByCategory);

router.delete("/delete/:product_id", productController.deleteProduct);
router.post("/add", productController.addProduct);
router.post("/update", productController.updateProduct);
router.delete(
  "/delete_category/:category_id",
  productController.deleteCategory
);
router.post("/add_category", productController.addCategory);
router.post("/update_category", productController.updateCategory);

export default router;

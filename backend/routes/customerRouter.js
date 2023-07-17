import express from "express";
import controller from "../controllers/customerController.js";

const router = express.Router();

router.post("/login", controller.loginCustomer);
router.post("/register", controller.registerCustomer);
router.put("/update", controller.updateCustomer);
router.delete("/delete/:customer_id", controller.deleteCustomer);

export default router;

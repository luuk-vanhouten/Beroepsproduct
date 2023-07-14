import express from "express";
import controller from "../controllers/customerController.js";

const router = express.Router();


router.post("/login", controller.loginCustomer);
router.put("/register", controller.registerCustomer);

export default router;

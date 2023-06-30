import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import loginController from "../controllers/loginController.js";

const { postLogin, getLogin, putLogin, deleteLogin } = loginController;

const router = express.Router();
router.use(cors());
router.use(bodyParser.json());
let classes = {};

router.post("/", postLogin);
router.get("/Email/:email/Password/:password", getLogin);
router.put(
  "/FirstName/:first_name/LastName/:last_name/Email/:email/Password/:password/PhoneNumber/:phone_number/Address/:address/City/:city/State/:state/ZipCode/:zip_code/Country/:country",
  putLogin
);
router.delete("/Email/:email/Password/:password", deleteLogin);

export default router;

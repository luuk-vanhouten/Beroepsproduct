import express from "express";
import cors from "cors";

import productRouter from "./routes/productRouter.js";
import dataAccess from "./db/dataAccess.js";
import loginRouter from "./routes/loginRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/login", loginRouter);

dataAccess.initializeDatabase();

app.listen(3000);

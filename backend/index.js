import express from "express";
import cors from "cors";

import productRouter from "./routes/productRouter.js";
import dataAccess from "./db/dataAccess.js";
import customerRouter from "./routes/customerRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/customer", customerRouter);

dataAccess.initializeDatabase();

app.listen(3000);

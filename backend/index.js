import express from "express";
import cors from "cors";

import dataAccess from "./db/dataAccess.js";
import productRouter from "./routes/productRouter.js";
import customerRouter from "./routes/customerRouter.js";

dataAccess.initializeDatabase();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/customer", customerRouter);

app.get("*", function (req, res) {
    res
      .status(404)
      .send(
        "404: Page not found."
      );
  });
  
  app.listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
 
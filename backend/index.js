import express from "express";
import cors from "cors";

// import classesRouter from "./routes/classRouter.js";
import dataAccess from "./db/dataAccess.js";

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/api/classes", classesRouter);

dataAccess.initializeDatabase("./db/database.sqlite");

app.listen(3000);

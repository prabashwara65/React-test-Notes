import express from "express";
import cors from "cors";

import authRouter from "./routes/auth.js";
import connectToDatabase from "./Database/Database.js";

const app = express();
app.use(cors());
app.use(express.json)
app.use("/auth", authRouter);

app.listen(5000, () => {
  connectToDatabase();
  console.log("Server is running");
});

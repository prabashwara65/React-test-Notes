import express from "express";
import cors from "cors";

import authRouter from "./routes/auth.js";
import connectToDatabase from "./Database/Database.js";

const PORT = 8080

const app = express();
app.use(cors());
app.use(express.json())


app.use("/auth", authRouter);

app.listen(PORT, () => {
  connectToDatabase();
  console.log("Server is running " + PORT);
});

import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";

import "./db/db.js";
import carsRouter from "./routes/carsRouter.js";
import userRouter from "./routes/userRouters.js";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/irokezProject/cars", carsRouter);
app.use("/irokezProject/users", userRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running. Use our API on port: 3000");
});

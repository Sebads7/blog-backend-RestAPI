import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => app.listen(3000))
  .then(() => console.log("Connected to DB and Listening on port 3000"))
  .catch((err) => console.log(err));

app.use("/", (req, res, next) => {
  res.send("Hello World");
});

// app.listen(3000);

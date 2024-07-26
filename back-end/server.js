import express from "express";
import mongoose, { connect } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.route.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
// app.use("/api/auth",authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`sever running on http://localhost:${PORT}`);
});

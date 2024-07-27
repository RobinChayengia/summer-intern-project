// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToMongoDB from './db/connectToMongoDB.js';
import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.route.js';
import userRoutes from './routes/user.routes.js';
import uploadRoute from './routes/uploadRoutes.js';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

// Serve static files from the 'uploads/profile' directory
app.use('/uploads/profile', express.static(path.join(__dirname, 'uploads/profile')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/uploads', uploadRoute);

// Start server and connect to MongoDB
app.listen(PORT, () => {
  connectToMongoDB(); // Connect to MongoDB
  console.log(`Server running on http://localhost:${PORT}`);
});

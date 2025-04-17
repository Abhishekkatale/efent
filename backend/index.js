import express from 'express';
import mongoose from 'mongoose';
import "dotenv/config"
import inquiryRoutes from './routes/details.js';
import cors from 'cors';


const app = express();
const port = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json()); 

// ✅ Routes
app.use('/api/inquiries', inquiryRoutes);

// ✅ MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
};

connectDB();

// ✅ Start Server
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});

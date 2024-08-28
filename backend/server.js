import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Import the MongoDB connection function

dotenv.config(); // Load environment variables from .env file

const app = express(); // Initialize the Express app
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON requests

connectDB(); // Connect to MongoDB

// Sample route to print a welcome message
app.get('/api/welcome', (req, res) => {
  res.json({ message: 'Welcome to ProspectLog!' });
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

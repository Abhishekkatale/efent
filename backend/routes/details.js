// routes/inquiry.js

import express from 'express';
import Inquiry from '../models/details.js'; // Make sure the path and file name are correct

const router = express.Router();

// @route   POST /api/inquiry
// @desc    Handle new inquiry submission
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, contactNumber, category, location, requirement } = req.body;

    // Validate required fields
    if (!name || !contactNumber || !category || !location || !requirement) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a new inquiry instance
    const newInquiry = new Inquiry({
      name,
      contactNumber,
      category,
      location,
      requirement
    });

    // Save to MongoDB
    await newInquiry.save();

    res.status(201).json({ message: 'Inquiry submitted successfully' });
  } catch (err) {
    console.error('Error saving inquiry:', err.message);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

export default router;

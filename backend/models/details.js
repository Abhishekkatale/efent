// models/Inquiry.js

import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact Number is required'],
    trim: true,
  },
  category: {
    type: String,
    required: [true, 'Search term is required'],
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
  },
  requirement: {
    type: String,
    required: [true, 'Requirement is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Ensure the model is not compiled multiple times during dev reload
const Inquiry = mongoose.models.Inquiry || mongoose.model('Inquiry', inquirySchema);

export default Inquiry;

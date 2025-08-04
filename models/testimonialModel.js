// models/testimonial.model.js
const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  image: { type: String, default: '' }, // Optional for custom profile image
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);

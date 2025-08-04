// controllers/testimonial.controller.js
const Testimonial = require('../models/testimonialModel.js');

// GET all testimonials
exports.getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch testimonials' });
  }
};

// CREATE testimonial
exports.createTestimonial = async (req, res) => {
  try {
    const newTestimonial = new Testimonial(req.body);
    const saved = await newTestimonial.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create testimonial' });
  }
};

// GET single testimonial
exports.getTestimonialById = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) return res.status(404).json({ error: 'Not found' });
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch testimonial' });
  }
};

// UPDATE testimonial
exports.updateTestimonial = async (req, res) => {
  try {
    const updated = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update testimonial' });
  }
};

// DELETE testimonial
exports.deleteTestimonial = async (req, res) => {
  try {
    const deleted = await Testimonial.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Testimonial deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete testimonial' });
  }
};

// routes/testimonial.routes.js
const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialController.js');

router.get('/get', testimonialController.getAllTestimonials);
router.post('/create', testimonialController.createTestimonial);
router.get('/get/:id', testimonialController.getTestimonialById);
router.put('/update/:id', testimonialController.updateTestimonial);
router.delete('/delete/:id', testimonialController.deleteTestimonial);

module.exports = router;

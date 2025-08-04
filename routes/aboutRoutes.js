const express = require('express');
const router = express.Router();
const {
  createSection,
  getAllSections,
  getSectionByType,
  updateSection,
  deleteSection,
  upsertSection,
} = require('../controllers/aboutController');
const { upload } = require('../utils/cloudinary.js');

// All CRUD routes
router.post('/create', upload.single('image'), createSection);             // Create
router.get('/getAll', getAllSections);                                          // Read All
router.get('/get/:type', getSectionByType);                                   // Read by Type
router.put('/update/:id', upload.single('image'), updateSection);         // Update
router.delete('/delete/:id', deleteSection);                              // Delete
router.post('/upsert', upload.single('image'), upsertSection);            // Create or Update by Type

module.exports = router;

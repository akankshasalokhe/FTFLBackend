const express = require('express');
const router = express.Router();
const {
  getFooter,
  createFooter,
  updateFooter,
  deleteFooter
} = require('../controllers/footerController.js');

router.get('/get', getFooter);                // Read
router.post('/create', createFooter);            // Create
router.put('/update/:id', updateFooter);         // Update
router.delete('/delete/:id', deleteFooter);      // Delete

console.log('Footer routes loaded');


module.exports = router;

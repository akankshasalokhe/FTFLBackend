const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController.js');
const { upload } = require('../utils/cloudinary.js');

// Use multer for multiple named fields
const multiUpload = upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'headingImage', maxCount: 1 }
]);

router.post('/create', multiUpload, blogController.createBlog);
router.get('/get', blogController.getAllBlogs);
router.get('/getById/:id', blogController.getBlogById);
router.put('/update/:id', multiUpload, blogController.updateBlog);
router.delete('/delete/:id', blogController.deleteBlog);

module.exports = router;

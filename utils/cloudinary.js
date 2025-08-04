const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
require('dotenv').config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Dynamic storage setup
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const folder = req.body.folder || 'misc'; // default folder if not specified
    return {
      folder,
      allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
      public_id: `${Date.now()}-${file.originalname.split('.')[0]}`,
    };
  },
});

const upload = multer({ storage });

module.exports = { cloudinary, upload };

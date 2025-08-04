const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },         // Main image URL (Cloudinary)
  headingImage: { type: String },  // Heading image URL (Cloudinary)
  headings: [{ type: String }],
  items: [{
    title: String,
    description: String
  }]
}, { timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);

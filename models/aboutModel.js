const mongoose = require('mongoose');

const aboutSectionSchema = new mongoose.Schema({
  type: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('AboutSection', aboutSectionSchema);

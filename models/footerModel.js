const mongoose = require('mongoose');

const footerSchema = new mongoose.Schema({
  socialLinks: [
    {
      platform: {
        type: String,
        required: true,
        enum: ['facebook', 'instagram', 'linkedin', 'twitter', 'whatsapp']
      },
      url: { type: String, required: true }
    }
  ],
  contactInfo: {
    phone: { type: String, required: true },
    hours: { type: String, required: true },
    address: { type: String, required: true }
  }
}, { timestamps: true });

module.exports = mongoose.model('Footer', footerSchema);

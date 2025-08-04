const Footer = require('../models/footerModel.js');

// GET all footer (only one typically)
exports.getFooter = async (req, res) => {
  console.log("GET footer called");
  try {
    const footer = await Footer.findOne();
    console.log("Fetched footer:", footer);
    res.json(footer);
  } catch (error) {
    console.error("Error fetching footer:", error);
    res.status(500).json({ error: 'Failed to fetch footer' });
  }
};


// CREATE new footer
exports.createFooter = async (req, res) => {
  try {
    const newFooter = new Footer(req.body);
    await newFooter.save();
    res.status(201).json(newFooter);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create footer' });
  }
};

// UPDATE footer by ID
exports.updateFooter = async (req, res) => {
  try {
    const updated = await Footer.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update footer' });
  }
};

// DELETE footer by ID
exports.deleteFooter = async (req, res) => {
  try {
    await Footer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Footer deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete footer' });
  }
};

const AboutSection = require('../models/aboutModel.js');

// CREATE section
exports.createSection = async (req, res) => {
  try {
    const { type, title, description } = req.body;
    const image = req.file?.path || 'https://via.placeholder.com/600x400';

    const existing = await AboutSection.findOne({ type });
    if (existing) return res.status(400).json({ error: 'Type already exists. Use update instead.' });

    const newSection = new AboutSection({ type, title, description, image });
    await newSection.save();
    res.status(201).json(newSection);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create section', details: error.message });
  }
};

// READ all sections
exports.getAllSections = async (req, res) => {
  try {
    const sections = await AboutSection.find().sort({ createdAt: -1 });
    res.json(sections);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sections' });
  }
};

// READ section by type
exports.getSectionByType = async (req, res) => {
  try {
    const { type } = req.params;
    const section = await AboutSection.findOne({ type });
    if (!section) return res.status(404).json({ error: 'Section not found' });
    res.json(section);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch section' });
  }
};

// UPDATE section by ID
exports.updateSection = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, title, description } = req.body;
    const image = req.file?.path;

    const updated = await AboutSection.findByIdAndUpdate(
      id,
      {
        ...(type && { type }),
        ...(title && { title }),
        ...(description && { description }),
        ...(image && { image }),
      },
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: 'Section not found' });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update section' });
  }
};

// DELETE section by ID
exports.deleteSection = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await AboutSection.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'Section not found' });
    res.json({ message: 'Section deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete section' });
  }
};

// UPSERT (Create or Update by Type)
exports.upsertSection = async (req, res) => {
  try {
    const { type, title, description } = req.body;
    const image = req.file?.path || req.body.image || 'https://via.placeholder.com/600x400';

    const updated = await AboutSection.findOneAndUpdate(
      { type },
      { title, description, image },
      { new: true, upsert: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to upsert section' });
  }
};

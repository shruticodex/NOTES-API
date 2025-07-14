const Note = require('../models/Note');

exports.createNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    const note = await Note.create({ title, content, user: req.user._id });
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ message: 'Error creating note', error: err.message });
  }
};

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching notes', error: err.message });
  }
};
exports.updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const note = await Note.findOne({ _id: id, user: req.userId || req.user._id });
    if (!note) return res.status(404).json({ message: 'Note not found' });

    if (title) note.title = title;
    if (content) note.content = content;

    await note.save();
    res.json({ message: 'Note updated successfully', note });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update note', error: err.message });
  }
};

exports.deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findOneAndDelete({ _id: id, user: req.userId || req.user._id });
    if (!note) return res.status(404).json({ message: 'Note not found' });

    res.json({ message: 'Note deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete note', error: err.message });
  }
};


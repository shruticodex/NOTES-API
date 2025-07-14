const express = require('express');
const { createNote, getNotes, updateNote, deleteNote } = require('../controllers/noteController');
const protect = require('../middlewares/authMiddleware');
const router = express.Router();
router.post('/', protect, createNote);
router.get('/', protect, getNotes);
router.patch('/:id', protect, updateNote);
router.delete('/:id', protect, deleteNote);
module.exports = router;

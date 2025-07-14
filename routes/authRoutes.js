const express = require('express');
const { register, login, updateEmail } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.patch('/update-email', authMiddleware, updateEmail); // ✅ New

module.exports = router;

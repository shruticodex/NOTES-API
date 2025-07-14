const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};

// UPDATE EMAIL
exports.updateEmail = async (req, res) => {
  const { newEmail } = req.body;

  if (!newEmail) {
    return res.status(400).json({ message: 'New email is required' });
  }

  try {
    // Check if the new email is already in use
    const emailExists = await User.findOne({ email: newEmail });
    if (emailExists) {
      return res.status(409).json({ message: 'Email already in use' });
    }

    // Update the email
    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      { email: newEmail },
      { new: true }
    );

    res.json({
      message: 'Email updated successfully',
      email: updatedUser.email
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update email', error: err.message });
  }
};

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json());
const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`✅ Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => console.error('❌ DB Connection Error:', err));

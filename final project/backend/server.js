const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const { router: authRoutes } = require('./routes/authRoutes');



dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/api/auth', authRoutes);
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Test Route
app.get('/', (req, res) => res.send('Sound Mixer Backend Running'));

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

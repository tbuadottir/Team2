const express = require('express');
const mongoose = require('mongoose');
const teamsRoutes = require('./routes/teams');
const config = require('./config/db');

const app = express();

// Connect to MongoDB
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Routes
app.use('/WebAPPQR', teamsRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

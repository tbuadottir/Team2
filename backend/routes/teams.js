const express = require('express');
const router = express.Router();
const Team = require('../models/Team');

// POST route to create a new team entry
router.post('/', async (req, res) => {
  try {
    const { teamName, timeStamp, randomPage } = req.body;
    const newTeam = new Team({ teamName, timeStamp, randomPage });
    await newTeam.save();
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET route to retrieve leaderboard data
router.get('/leaderboard', async (req, res) => {
  try {
    const leaderboard = await Team.find().sort({ timeStamp: -1 });
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

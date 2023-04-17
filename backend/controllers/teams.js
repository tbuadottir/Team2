const Team = require('../models/Team');

// Function to handle submitting a team
exports.submitTeam = async (req, res) => {
  try {
    const { teamName, timeStamp, randomPage } = req.body;
    const newTeam = new Team({ teamName, timeStamp, randomPage });
    await newTeam.save();
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to handle retrieving leaderboard data
exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Team.find().sort({ timeStamp: -1 });
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

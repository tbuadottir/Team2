const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teams');

// POST route to create a new team entry
router.post('/', teamsController.submitTeam);

// GET route to retrieve leaderboard data
router.get('/leaderboard', teamsController.getLeaderboard);

module.exports = router;

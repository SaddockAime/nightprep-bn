const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getTimerSettings, updateTimerSettings } = require('../controllers/timerController');

// @route   GET api/timer-settings
// @desc    Get user's timer duration
// @access  Private
router.get('/', auth, getTimerSettings);

// @route   POST api/timer-settings
// @desc    Save user's preferred timer duration
// @access  Private
router.post('/', auth, updateTimerSettings);

module.exports = router;

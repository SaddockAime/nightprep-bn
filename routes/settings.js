const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getSettings, updateSettings } = require('../controllers/settingsController');

// @route   GET api/settings
// @desc    Get user settings
// @access  Private
router.get('/', auth, getSettings);

// @route   PUT api/settings
// @desc    Update user settings
// @access  Private
router.put('/', auth, updateSettings);

module.exports = router;

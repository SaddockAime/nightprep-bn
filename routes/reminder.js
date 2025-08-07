const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getReminder, setReminder } = require('../controllers/reminderController');

// @route   GET api/reminder
// @desc    Get current reminder time
// @access  Private
router.get('/', auth, getReminder);

// @route   POST api/reminder
// @desc    Set/update reminder time
// @access  Private
router.post('/', auth, setReminder);

module.exports = router;

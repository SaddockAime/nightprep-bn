const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getBedtime, setBedtime } = require('../controllers/bedtimeController');

// @route   GET api/bedtime
// @desc    Get user bedtime
// @access  Private
router.get('/', auth, getBedtime);

// @route   POST api/bedtime
// @desc    Set/update bedtime for user
// @access  Private
router.post('/', auth, setBedtime);

module.exports = router;

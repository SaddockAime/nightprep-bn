const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getChecklist, addChecklistItem, updateChecklistItem, deleteChecklistItem } = require('../controllers/checklistController');

// @route   GET api/checklist
// @desc    Get user's checklist
// @access  Private
router.get('/', auth, getChecklist);

// @route   POST api/checklist
// @desc    Add an item to checklist
// @access  Private
router.post('/', auth, addChecklistItem);

// @route   PUT api/checklist/:id
// @desc    Update a checklist item
// @access  Private
router.put('/:id', auth, updateChecklistItem);

// @route   DELETE api/checklist/:id
// @desc    Delete a checklist item
// @access  Private
router.delete('/:id', auth, deleteChecklistItem);

module.exports = router;

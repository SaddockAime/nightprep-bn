const User = require('../models/User');

// Get user's checklist
exports.getChecklist = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('checklist');
    res.json(user.checklist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Add a checklist item
exports.addChecklistItem = async (req, res) => {
  const { task } = req.body;

  try {
    const user = await User.findById(req.user.id);
    const newItem = {
      task,
      completed: false,
    };

    user.checklist.unshift(newItem);
    await user.save();
    res.json(user.checklist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update a checklist item
exports.updateChecklistItem = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const item = user.checklist.id(req.params.id);

    if (!item) {
      return res.status(404).json({ msg: 'Checklist item not found' });
    }

    item.completed = !item.completed;
    await user.save();
    res.json(user.checklist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete a checklist item
exports.deleteChecklistItem = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const item = user.checklist.id(req.params.id);

    if (!item) {
      return res.status(404).json({ msg: 'Checklist item not found' });
    }

    item.remove();
    await user.save();
    res.json(user.checklist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

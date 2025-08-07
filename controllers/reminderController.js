const User = require('../models/User');

// Get reminder time
exports.getReminder = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('reminderTime');
    res.json({ reminderTime: user.reminderTime });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Set/update reminder time
exports.setReminder = async (req, res) => {
  const { reminderTime } = req.body;

  try {
    let user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: { reminderTime } },
      { new: true }
    ).select('reminderTime');

    res.json({ reminderTime: user.reminderTime });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

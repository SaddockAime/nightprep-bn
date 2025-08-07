const User = require('../models/User');

// Get user settings
exports.getSettings = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('bedtime reminderTime timerDuration');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update user settings
exports.updateSettings = async (req, res) => {
  const { bedtime, reminderTime, timerDuration } = req.body;

  const settingsFields = {};
  if (bedtime) settingsFields.bedtime = bedtime;
  if (reminderTime) settingsFields.reminderTime = reminderTime;
  if (timerDuration) settingsFields.timerDuration = timerDuration;

  try {
    let user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: settingsFields },
      { new: true }
    ).select('bedtime reminderTime timerDuration');

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

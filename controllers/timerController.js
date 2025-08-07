const User = require('../models/User');

// Get timer settings
exports.getTimerSettings = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('timerDuration');
    res.json({ timerDuration: user.timerDuration });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update timer settings
exports.updateTimerSettings = async (req, res) => {
  const { timerDuration } = req.body;

  try {
    let user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: { timerDuration } },
      { new: true }
    ).select('timerDuration');

    res.json({ timerDuration: user.timerDuration });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

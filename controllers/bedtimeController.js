const User = require('../models/User');

// Get user bedtime
exports.getBedtime = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('bedtime');
    res.json({ bedtime: user.bedtime });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Set/update bedtime
exports.setBedtime = async (req, res) => {
  const { bedtime } = req.body;

  try {
    let user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: { bedtime } },
      { new: true }
    ).select('bedtime');

    res.json({ bedtime: user.bedtime });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

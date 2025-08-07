const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bedtime: {
    type: String, // e.g., '22:30'
  },
  reminderTime: {
    type: String, // e.g., '21:00'
  },
  timerDuration: {
    type: Number, // in minutes, e.g., 30 for 30 minutes
    default: 30,
  },
  checklist: [
    {
      task: { type: String, required: true },
      completed: { type: Boolean, default: false },
    },
  ],
}, {
  timestamps: true, // This adds createdAt and updatedAt
});

// Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('User', UserSchema);

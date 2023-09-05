const mongoose = require('mongoose');

const Images = new mongoose.Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profiles'
  },
  filename: String,
  path: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Image', Images);

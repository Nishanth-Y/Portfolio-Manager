const mongoose = require('mongoose');

const Images = new mongoose.Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profiles'
  },
  filename: String,
  path: String,
  filename1: String,
  path1: String,
  filename2: String,
  path2: String,
  filename3: String,
  path3: String,
  filename4: String,
  path4: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Image', Images);

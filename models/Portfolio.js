const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  images:{
    image1:{
        type: String
    },
    image2:{
        type: String
    },
    image3:{
        type: String
    },
    image4:{
        type: String
    },
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('profile', Portfolio);

const mongoose = require('mongoose');

const Media = mongoose.models.Media || mongoose.model('Media', new mongoose.Schema({
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  }
}));

module.exports = Media;

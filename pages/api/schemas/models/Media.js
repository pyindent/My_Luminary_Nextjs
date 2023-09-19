const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
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
});

const Media = mongoose.model('Media', MediaSchema);

module.exports = Media;

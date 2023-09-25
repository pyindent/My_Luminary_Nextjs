const mongoose = require('mongoose');

const Media = mongoose.models.Media || mongoose.model('Media', new mongoose.Schema({
  bucket: {
    type: String,
    required: true
  },
  key: {
    type: String,
    required: true,
  }
}));

module.exports = Media;

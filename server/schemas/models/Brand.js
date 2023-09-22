const mongoose = require('mongoose');

const Brand = mongoose.models.Brand || mongoose.model('Brand', new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
  picture: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'media' 
  },
}));

module.exports = Brand;
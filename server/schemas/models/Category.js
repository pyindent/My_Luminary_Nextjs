const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Check if the 'Category' model already exists
const Category = mongoose.models.Category || mongoose.model('Category', new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  parent: {
    type: Schema.Types.ObjectId,
  },
  picture: {
    type: Schema.Types.ObjectId,
    ref: 'media'
  },
  status: {
    type: Boolean
  },
  slug: {
    type: String,
    required: true
  }
}));

module.exports = Category;
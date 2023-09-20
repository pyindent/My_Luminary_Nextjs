const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  parentId: {
    type: Schema.Types.ObjectId,
  },
  picture: {
    type: Schema.Types.ObjectId,
    ref: 'media'
  },
  slug: {
    type: String,
    required: true
  }
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
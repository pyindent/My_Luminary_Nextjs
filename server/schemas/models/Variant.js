const mongoose = require('mongoose');

const Variant = mongoose.models.Variant || mongoose.model('Variant', new mongoose.Schema({
  picture: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'media'
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product'
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  sku: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  sale_price: {
    type: Number,
    required: true
  },
}));

module.exports = Variant;
const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
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
});

const Variant = mongoose.model('Variant', variantSchema);

module.exports = Variant;
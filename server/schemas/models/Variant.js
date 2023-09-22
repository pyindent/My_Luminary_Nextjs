const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
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
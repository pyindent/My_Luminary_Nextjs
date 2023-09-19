const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required:true },
  slug: { type: String, required:true },
  short_description: { type: String },
  price: [{ type: Number }],
  until: { type: String },
  sku: { type: String },
  stock: { type: Number },
  ratings: { type: Number },
  reviews: { type: Number },
  sale_count: { type: Number },
  is_top: { type: Boolean },
  is_new: { type: Boolean },
  is_featured: { type: Boolean },
  small_pictures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'media' }],
  pictures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'media' }],
  large_pictures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'media' }],
  brands: [{ type: mongoose.Schema.Types.ObjectId, ref: 'brand' }],
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tag' }],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'category' }],
  variants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'variant' }],
  content: { type: String },
  discount: { type: Number },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
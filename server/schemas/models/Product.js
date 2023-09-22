const mongoose = require('mongoose');

const Product = mongoose.models.Product || mongoose.model('Product', new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  slug: { 
    type: String, 
    required:true 
  },
  long_description: { 
    type: String 
  },
  short_description: { 
    type: String 
  },
  ratings: { 
    type: Number 
  },
  reviews: { 
    type: Number 
  },
  pictures: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'media' 
  }],
  brands: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'brand' 
  }],
  category: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'category'
  },
  variants: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'variant' 
  }],
}, {timestamps: true}));

module.exports = Product;
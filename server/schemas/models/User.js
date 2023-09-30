const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Check if the 'User' model already exists
const User = mongoose.models.Category || mongoose.model('User', new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: Schema.Types.ObjectId,
    ref: 'category'
  },
  role: {
    type: String,
    enum: ['customer', 'driver', 'agent', 'admin'],
    defaut: 'customer'
  },
  address: {
    type: Schema.Types.ObjectId,
    ref: 'media'
  },
  phoneNumber: {
    type: String,
  },
  social: {
    provider: {
      type: String,
      enum: ['google', 'facebook'],
      required: false
    },
    providerId: {
      type: String,
      required: false
    }
  }
}));


module.exports = User;
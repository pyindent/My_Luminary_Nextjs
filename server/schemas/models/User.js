const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const status = require('../enums');
const { USER_ROLE } = status

// Check if the 'User' model already exists
const User = mongoose.models.User || mongoose.model('User', new mongoose.Schema({
  email: {
    type: String,
    require: true
  },
  name: {
    type: String
  },
  family_name: {
    type: String
  },
  given_name: {
    type: String
  },
  nickname: {
    type: String
  },
  role: {
    type: String,
    enum: [
      USER_ROLE.CUSTOMER, 
      USER_ROLE.DRIVER, 
      USER_ROLE.AGENCY, 
      USER_ROLE.ADMIN
    ],
    default: USER_ROLE.CUSTOMER, // Set default role as "customer"
  },
  picture: {
    type: String
  },
  locale: {
    type: String
  },
  password: {
    type: String
  },
  address: {
    type: String,
  },
  phone_number: {
    type: String
  },
  email_verified: {
    type: Boolean
  }
}, {timestamps: true}));

module.exports = User;
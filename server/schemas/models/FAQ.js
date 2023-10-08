const mongoose = require('mongoose');
const status = require('../enums');
const { FAQ_TYPE } = status

const Faq = mongoose.models.Faq || mongoose.model('Faq', new mongoose.Schema({
  question: {
    type: String,
    require: true
  },
  answer: {
    type: String,
    require: true
  },
  faq_type: {
    type: String,
    enum: [
        FAQ_TYPE.CUSTOMER_MANAGEMENT,
        FAQ_TYPE.OTHERS
    ],
    default: FAQ_TYPE.OTHERS,
  }
}));

module.exports = Faq;
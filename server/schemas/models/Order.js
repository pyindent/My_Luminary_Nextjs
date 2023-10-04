const mongoose = require('mongoose');
const status = require('../enums');
const { ORDER_STATUS, PAYMENT_METHOD } = status

const Order = mongoose.models.Order || mongoose.model('Order', new mongoose.Schema({
  placed_on: { 
    type: String,  
  },
  actual_delivery_date: { 
    type: String,  
  },
  paid_amount: {
    type: Number
  },
  saved_amount: {
    type: Number
  },
  customer_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'user'
  },
  order_status: {
    type: String,
    enum: [
        ORDER_STATUS.PAYMENT_PENDING, 
        ORDER_STATUS.PAYMENT_PROCESSING, 
        ORDER_STATUS.PAYMENT_SUCCESS, 
        ORDER_STATUS.PAYMENT_FAILED
    ],
    default: ORDER_STATUS.PAYMENT_PENDING,
  },
  payment_method: {
    type: String,
    enum: [
        PAYMENT_METHOD.CASH_ON_DELIVERY, 
        PAYMENT_METHOD.BANK_TRANSFER
    ],
    default: PAYMENT_METHOD.CASH_ON_DELIVERY,
  }
}, {timestamps: true}));

module.exports = Order;
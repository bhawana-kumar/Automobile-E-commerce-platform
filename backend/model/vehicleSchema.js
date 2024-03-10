const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  identification_number: {
    type: String,
    required: true
  },
  registration_number: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  brandName: {
    type: String,
    required: true
  },
  carName: {
    type: String,
    required: true
  },
  manufYear: {
    type: Number,
    required: true
  },
  ownerShip: {
    type: String,
    enum: ['First', 'Second', 'Third'],
    required: true
  },
  driveType: {
    type: String,
    enum: ['FWD', 'RWD', 'AWD', '4WD'],
    required: true
  },
  carImg: {
    type: [String],
    required: false
  },
  color: {
    type: String,
    required: false
  },
  seats: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  engine: {
    type: String,
    required: false
  },
  power: {
    type: String,
    required: false
  },
  torque: {
    type: String,
    required: false
  },
  fuelType: {
    type: String,
    required: true
  },
  mileage: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  bodyType: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['available', 'unavailable'],
    required: false,
    default: 'unavailable'
  },
  sellerId: { 
    // type: Types.ObjectId, ref: 'sellers' , required: false} // Reference to the User model for seller's ID
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seller'
  }
  });

module.exports = mongoose.model("vehicles", productSchema);

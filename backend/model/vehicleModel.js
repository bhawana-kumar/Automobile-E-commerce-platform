const mongoose = require('mongoose');
require('../ConnectionConfig/connect');


// Define the product schema
const productSchema = new mongoose.Schema({
    brand: { type: String },
    model: { type: String },
    year: { type: String },
    ownership: { type: String },
    image: { type: String },
    color: { type: String },
    seats: { type: Number },
    price: { type: String },
    mileage: { type: String },
    fuel_type: { type: String },
    body_type: { type: String },
    description: { type: String },
    sellerId: { type: String },
    identification_number: { type: String },
    location: { type: String },
    registration_number: { type: String }
});


module.exports = mongoose.model("products", productSchema)
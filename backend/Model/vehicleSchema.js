//Model to be added
const mongoose = require('mongoose')
const { number } = require('yargs')
require('../ConnectionConfig/connection')


const productSchema = mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    
    ownership: {
        type: String,
        enum: ['First', 'Second','Third'], // Ensures only 'these' values are allowed
        required: true
    },

    
    image: {
        data: Buffer, // Binary data of the image
        contentType: String // Mime type of the image
    },

    color: {
        type: String,
        required: false
    },

    seats: {
        type : Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    fuel_type: {
        type: String,
        required: true
    },
  
    mileage: {
        type: String,
        required: false
    },
    
    description : {
        type: String,
        required: false
    },

    body_type: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("product", productSchema);

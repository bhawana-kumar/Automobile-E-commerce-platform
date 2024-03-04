import { Model, Schema, Types } from 'mongoose';
const mongoose = require('mongoose');

const { number } = require('yargs')
require('../ConnectionConfig/connection')


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['seller', 'buyer'],
        required: true
    },
    phone: {                              
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    joinedDate: {
        type: Date,
        default: Date.now
    },
    myvehicles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product' // Reference to the product model for seller's vehicles
    }],
    myorders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order' // Reference to the Order model for buyer's orders
    }],
    status: {
        type: String,
        required: false // Assuming status is not mandatory
    },
    shortlisted: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product' // Reference to the product model for buyer's shortlisted products
    }]
});

module.exports = mongoose.model('users', userSchema);

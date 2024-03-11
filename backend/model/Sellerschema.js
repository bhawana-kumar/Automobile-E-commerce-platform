
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {type: String},
    password: {type: String},
    email: { type: String},
    role: {type: String},
    phone: {type: String},
    address: {type: String},
    joinedDate: {type: String},
    myVehicles: [{type: String, ref: 'vehicles'
        //  mongoose.Schema.Types.ObjectId,
      // Reference to the vehicles model for seller's vehicles
    }],
    status: {type: String,enum: ['active', 'inactive'],required: false,default: 'active'},
    authorized: {type: String , enum: [ 'yes','no'], required : false, default:'yes'},
    paymentInfo: {
        type: mongoose.Schema.Types.Mixed // Storing payment info as a JSON object
    },
    sellsHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vehicles' // Reference to the vehicles model for seller's sales history
    }]
});

module.exports = mongoose.model('users', userSchema);

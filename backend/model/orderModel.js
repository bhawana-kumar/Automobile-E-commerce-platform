const mongoose = require("mongoose");
const Schema= mongoose.Schema;


const OrderSchema= new Schema({
    user_id:{
        type: Number
    },
    seller_id:{
        type: Number
    },
    vehicalDetails:{
        type: Array,
    },
    orderDate:{
        type: String
    },
    totalPrice:{
        type: String,
    },
    billingAddress: {
        type : String,
    },
    paymentMethod: {
        type: String
    },
    orderStatus: {
        type: String
    }
})

module.exports = mongoose.model('orders', OrderSchema)


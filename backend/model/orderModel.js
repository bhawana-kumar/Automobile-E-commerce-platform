const mongoose = require("mongoose");
const Schema= mongoose.Schema;


const OrderSchema= new Schema({
    dateTime:{
        type: Date
    },
    buyerId:{
        type:String
    },
    sellerId:{
        type: String
    },
    buyer:{
        type: Object,
    },
    seller:{
        type: Object
    },
    vehicle:{
        type: Object,
    },
    price: {
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


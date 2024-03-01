const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const UserSchema= new Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type : String,
        required: true,
    },
    role: {
        type: String
    },
    phone: {
        type: Number
    },
    address: {
        type: String
    },
    joinedDate: {
        type: String
    },
    myOrders: {
        type: Array
    },
    shortlisted: {
        type: Array
    },
    status: {
        type: String
    }
})

module.exports = mongoose.model('users', UserSchema)

//MONGODB WILL BY DEFAULT TAKE COLLECTION NAME IN PLURAL AND SMALLCASE 
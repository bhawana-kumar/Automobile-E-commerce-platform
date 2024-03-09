const mongoose = require("mongoose");
const { string, array } = require("yargs");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ],
    phone: Number,

    address: {
      type: Array,
      default: []
    },
    
    myOrders: {
      type: Array,
      default: []
    },
    
    shortlisted: {
      type: Array,
      default: []
    },
    status: {
      type: String,
      default: "Active"
    }
  },
  {
    timestamps: true
  })
);

module.exports = User;

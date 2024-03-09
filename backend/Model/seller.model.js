const mongoose = require("mongoose");

const Seller = mongoose.model(
  "Seller",
  new mongoose.Schema(
    {
      sellerId: String,
      myVehicles: {
        type: Array,
        default: []
      },
      billingInfo: {
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
    }
  )
);

module.exports = Seller;

  const mongoose = require("mongoose");

  const Buyer = mongoose.model(
    "Buyer",
    new mongoose.Schema(
      {
        buyerId: String,
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
      }
    )
  );

  module.exports = Buyer;
      
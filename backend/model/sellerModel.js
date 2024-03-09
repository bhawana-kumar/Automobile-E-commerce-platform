
const mongoose = require("mongoose")
const { Schema } = mongoose;

const sellerSchema = new mongoose.Schema({
  sellerId: {
    // type: mongoose.Schema.Types.ObjectId,
    type:String,
    required: true
  },
  myVehicles: {
   type:Array
  },
  orderHistory: {
    type:Array
  },
  paymentInfo: {
   type:JSON
  },
  status: {
    type: String,
    enum: ['active', 'inactive'] 
  }
}
)



module.exports = mongoose.model("Seller", sellerSchema)


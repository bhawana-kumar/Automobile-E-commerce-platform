const mongoose=require('mongoose')
const paymentSchema=mongoose.Schema({
"vehicleId": String,
  "buyerName":String,
  "price":String,
  "carName":String,
  "brandName":String,
  "manufYear":String,
  "color":String,
  "registration_number":String,
  "seller_id":String

  //  paymentId: String,
  // amount: Number,
  // currency: String,
  // customerName: String,
  // customerEmail: String,
  // customerContact: String,
  // paymentStatus: String,
  // timestamp: { type: Date, default: Date.now }
})

module.exports=mongoose.model("payment",paymentSchema)


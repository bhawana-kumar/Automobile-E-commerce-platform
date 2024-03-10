const mongoose=require('mongoose')
const paymentSchema=mongoose.Schema({

  paymentId: String,
  amount: String,
  currency: String,
  customerName: String,
  customerEmail: String,
  customerContact: String,
  paymentStatus: String,
  timestamp: { type: Date, default: Date.now }
})

module.exports=mongoose.model("payment",paymentSchema)



const mongoose = require("mongoose")
const { Schema } = mongoose;

const sellerSchema = mongoose.Schema(
  {
    
      name: { type: String, required: true },
      email: { type: String, required: true ,  unique: true},
      password: { type: String, required: true }, 
      
  },
  {
    timestamps: true
}
)

module.exports = mongoose.model("Seller", sellerSchema)



const mongoose = require("mongoose")
const { Schema } = mongoose;

const adminSchema = mongoose.Schema(
  {
    
      name: { type: String, required: true },
      email: { type: String, required: true ,  unique: true},
      password: { type: String, required: true }, 
      isAdmin:{type:Boolean,default:false},
      roles: { type:String}
  }
)

module.exports = mongoose.model("Admin", adminSchema)



const mongoose = require("mongoose")
const { Schema } = mongoose;

const adminSchema = mongoose.Schema(
  {
    
      name: { type: String, required: true },
      email: { type: String, required: true ,  unique: true},
      password: { type: String, required: true }, 
      isAdmin:{type:Boolean,default:false},
      roles: { type:[Schema.Types.ObjectId],required:true,ref:"Role" },
  },
  {
    timestamps: true
}
)

module.exports = mongoose.model("Admin", adminSchema)


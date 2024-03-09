const mongoose=require('mongoose')
const reportSchema=mongoose.Schema(
    {
        "buyerId":String,
        "buyerName":String,
        "sellerId":String,
        "sellerName":String,
        "vehicleId":String,
        "vehicleRegistrationNumber":String,
        "comment":String,
        resolved: { type: Boolean, default: false }
    }
)
module.exports=mongoose.model("report",reportSchema)


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const reportSchema = new Schema({
//   // Other schema fields...
//   resolved: false  // This line is incorrect
// });

// module.exports = mongoose.model('Report', reportSchema);

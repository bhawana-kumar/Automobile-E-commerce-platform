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
        "resolved":false
    }
)
module.exports=mongoose.model("report",reportSchema)

const mongoose=require('mongoose')
const orderSchema=mongoose.Schema(
    {
        "dateTime":String,
        "orderId":String,
        "buyerId":String,
        "buyer":String,
        "sellerId":String,
        "seller":String,
        "vehicle":String,
        "price":String
    }
)
module.exports=mongoose.model("order",orderSchema)

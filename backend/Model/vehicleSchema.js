//Model to be added
const mongoose=require('mongoose')
const vehicleSchema=mongoose.Schema(
    {
        "productId":Number,
        "brandName":String,
        "modelName":String,
        "manYear":String,
        "images":String,
        "engine":String,
        "color":String,
        "price":Number
    }
)
module.exports=mongoose.model("products",vehicleSchema)

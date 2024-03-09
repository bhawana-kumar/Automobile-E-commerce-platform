const mongoose=require('mongoose')
const carSchema=mongoose.Schema({

    "carName":String,
    "driveType":String,
    "engine":String,
    "mileage":String,
    "power":String,
    "tags":String,
    "price":String,
    "seatingCapacity":String,
    "torque":String,
})



    
module.exports=mongoose.model("Car",carSchema)


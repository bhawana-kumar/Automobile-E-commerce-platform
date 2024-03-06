const mongoose=require('mongoose')
const carSchema=mongoose.Schema({

    "carName":String,
    "driveType":String,
    "engine":String,
    "mileage":String,
    "power":String,
    "power":String,
    "price":String,
    "seatingCapacity":String,
    "torque":String,
})
// {
        // _id: {
        //     type: String,
        //     required: true
        // },
        // brand: {
        //     type: String,
        //     required: true
        // },
        // model: { //carname
        //     type: String,
        //     required: true
        // },
        // year: {
        //     type: Number,
        //     required: true
        // }, 
        
        // ownership: {
        //     type: String,
        //     enum: ['First', 'Second','Third'], // Ensures only 'these' values are allowed
        //     required: true
        // },
        
        // image: {
        //     data: Buffer, // Binary data of the image
        //     contentType: String // Mime type of the image
        // },
    
        // color: {
        //     type: String,
        //     required: false
        // },
    
        // seats: {
        //     type : Number,
        //     required: true
        // },
    
        // price: {
        //     type: Number,
        //     required: true
        // },
    
        // fuel_type: {
        //     type: String,
        //     required: true
        // },
      
        // mileage: {
        //     type: String,
        //     required: false
        // },
        
        // description : {
        //     type: String,
        //     required: false
        // },
    
        // body_type: {
        //     type: String,
        //     required: true
        // },
        // driveType:{
        //     type: String,
        //     required: true
        // },
        // engine:{
        //     type: String,
        //     required: true
        // },
        // mileage:{
        //     type: String,
        //     required: true
        // },
        // power:{
        //     type: String,
        //     required: true
        // },
        // torque:{
        //     type: String,
        //     required: true
        // },
        // tags:{
        //     type: String,
        //     required: true
        // }})

    
module.exports=mongoose.model("Car",carSchema)


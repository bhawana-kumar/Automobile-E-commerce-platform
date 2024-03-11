const mongoose = require('mongoose');


// Define the product schema
// const vehicleSchema = new mongoose.Schema({
//     brand: { type: String },
//     model: { type: String },
//     year: { type: String },
//     ownership: { type: String },
//     image: { type: String },
//     color: { type: String },
//     seats: { type: Number },
//     price: { type: String },
//     mileage: { type: String },
//     fuel_type: { type: String },
//     body_type: { type: String },
//     description: { type: String },
//     sellerId: { type: String },
//     identification_number: { type: String },
//     location: { type: String },
//     registration_number: { type: String },
//     status:{type: String}

// });


// module.exports = mongoose.model("vehicle", vehicleSchema)


const vehicleSchema = new mongoose.Schema({
    carName: { type: String, required: true },
    brandName: { type: String, required: true },
    manufYear: { type: String, required: true },
    ownerShip: { type: String, required: true },
    carImg: { type: String, required: true },
    price: { type: String, required: true },
    engine: { type: String, required: true },
    power: { type: String, required: true },
    torque: { type: String, required: true },
    seatingCapacity: { type: String, required: true },
    driveType: { type: String, required: true },
    mileage: { type: String, required: true },
    tags: [{ type: String }],
    sellerId: { type: String, required: true },
    bodyType: { type: String, required: true },
    fuelType: { type: String, required: true },
    description: { type: String, required: true },
    color: { type: String, required: true },
    status: { type: String, required: true },
    identification_number: { type: String, required: true },
    location: { type: String, required: true },
    registration_number: { type: String, required: true }
});

module.exports = mongoose.model("vehicles", vehicleSchema);

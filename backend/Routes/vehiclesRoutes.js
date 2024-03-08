const express = require("express");
const vehicleRoute = express.Router();
const { getAllVehicleData, getVehicleById,postVehicle ,updateVehicle} = require("../controller/vehicleController");

vehicleRoute.get("/getAllVehicleData", getAllVehicleData);
vehicleRoute.get("/getVehicle/:vehicleId", getVehicleById);
vehicleRoute.post("/createVehicle",postVehicle); //seller authentication
vehicleRoute.put("/updateVehicle/:vehicleId",updateVehicle); //seller authentication
// vehicle.delete("/vehicles/deleteVehicle/vehicleId"); //seller authentication

module.exports = vehicleRoute;
 
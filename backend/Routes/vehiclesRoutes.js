const express = require("express");
const vehicleRoute = express.Router();
const { getAllVehicleData, getVehicleById,postVehicle ,updateVehicle , deleteVehicle , getVehicleDataBySellerId} = require("../controller/vehicleController");
const {getSellersbyId} = require("../Controller/sellerController")

vehicleRoute.get("/getAllVehicleData", getAllVehicleData);
vehicleRoute.get("/getVehicle/:vehicleId", getVehicleById);
vehicleRoute.post("/createVehicle",postVehicle); //seller authentication
vehicleRoute.put("/updateVehicle/:vehicleId",updateVehicle); //seller authentication
vehicleRoute.delete("/deleteProduct/:id", deleteVehicle)
vehicleRoute.get("/getVehiclesForSeller/:sellerId", getVehicleDataBySellerId)
vehicleRoute.get("/getSellers/:id", getSellersbyId)

module.exports = vehicleRoute;
 
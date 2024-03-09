const express = require("express");
const {getAllUserData,getUserById, updateUserById, deleteUserById, getAllOrdersData, getOrderById, getOrderByBuyerId, getOrderBySellerId, getAllReportsData, getVehicleDataBySellerId, getAllVehicleData, getVehicleDataById, getReportsDataByVehicleId, deleteVehicleById, updateReportsDataByVehicleId, getReportsDataByBuyerId, getReportsDataBySellerId, getVehicleDataByVehicleId, getOrderDataByVehicleId, getTopSellersData}= require("../controller/adminController.js");
const adminRoute = express.Router();
// const adminUtils = require('../utils/adminToken.js')

adminRoute.get("/getAllUsersData",getAllUserData);
adminRoute.get("/getUser/:userId",getUserById);
adminRoute.patch("/updateUser/:userId",updateUserById);
adminRoute.delete("/deleteUser/:userId",deleteUserById);

adminRoute.get('/getTopSellersData',getTopSellersData)

adminRoute.get("/getAllOrdersData",getAllOrdersData);
adminRoute.get("/getOrder/:orderId",getOrderById);
adminRoute.get("/getOrdersbyBuyerId/:userId",getOrderByBuyerId);
adminRoute.get("/getOrdersbySellerId/:userId",getOrderBySellerId);
adminRoute.get("/getOrdersbyVehicleId/:vehicleId",getOrderDataByVehicleId);

adminRoute.get("/getAllReportsData",getAllReportsData); 
adminRoute.get("/getReportsByVehicleId/:vehicleId",getReportsDataByVehicleId);
adminRoute.get("/getReportsByBuyerId/:buyerId",getReportsDataByBuyerId);
adminRoute.get("/getReportsBySellerId/:sellerId",getReportsDataBySellerId);
adminRoute.patch("/updateReportsByVehicleId/:vehicleId",updateReportsDataByVehicleId)

adminRoute.get("/getAllProductsData",getAllVehicleData);
adminRoute.get("/getProductsBySellerId/:userId",getVehicleDataBySellerId);
adminRoute.get("/getVehicleDataById/:vehicleId",getVehicleDataById);
adminRoute.delete("/deleteVehicleById/:vehicleId",deleteVehicleById);

module.exports = adminRoute;                               
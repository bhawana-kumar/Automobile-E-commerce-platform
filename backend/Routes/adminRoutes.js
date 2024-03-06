const express = require("express");
const {getAllUserData,getUserById, updateUserById, deleteUserById, getAllOrdersData, getOrderById, getOrderByBuyerId, getOrderBySellerId, getAllReportsData, getVehicleDataBySellerId, getAllVehicleData}= require("../controller/adminController.js");
// const { verifyAdmin }= require("../utils/verifyToken.js");
const adminRoute = express.Router();


adminRoute.get("/getAllUsersData",getAllUserData);
adminRoute.get("/getUser/:userId",getUserById);
adminRoute.patch("/updateUser/:userId",updateUserById);
adminRoute.delete("/deleteUser/:userId",deleteUserById);

adminRoute.get("/getAllOrdersData",getAllOrdersData);
adminRoute.get("/getOrder/:orderId",getOrderById);


adminRoute.get("/getOrdersbyBuyerId/:userId",getOrderByBuyerId);
adminRoute.get("/getOrdersbySellerId/:userId",getOrderBySellerId);

adminRoute.get("/getAllReportsData",getAllReportsData);

adminRoute.get("/getAllProductsData",getAllVehicleData);
adminRoute.get("/getProductsBySellerId/:userId",getVehicleDataBySellerId);




// adminRoute.get("/getAdminById/:adminId", verifyAdmin);
// app.post("/createAdmin");
// app.patch("/updateAdmin/adminId");
// app.delete("/deleteAdmin/adminId");

module.exports = adminRoute;                               
const express = require("express");
const {getAlladminData, getAdminById }= require("../controller/adminController.js");
// const { verifyAdmin }= require("../utils/verifyToken.js");
const adminRoute = express.Router();


// adminRoute.get("/getAlladminData");
// adminRoute.get("/getAdminById/:adminId", verifyAdmin);
// app.post("/createAdmin");
// app.patch("/updateAdmin/adminId");
// app.delete("/deleteAdmin/adminId");

module.exports = adminRoute;                               
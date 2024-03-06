const express = require("express");
const {getAllusersData, getUserById }= require("../controller/userController.js");
const { verifyUser }= require("../utils/verifyToken.js");

const reportRoute = express.Router();


// reportRoute.get("/users/getAllusersData",getAllusersData);
// // reportRoute.get("/users/getUserById/:userId",getUserById, verifyUser);
// reportRoute.post("/createUser");
// reportRoute.put("/users/editUser/:userId");
// reportRoute.patch("/users/updateUser/:userId");
// reportRoute.delete("/users/deleteUser/:userId");

reportRoute.get("/path", (req, res) => {
    // Callback function
  });
  
  reportRoute.post("/path", (req, res) => {
    // Callback function
  });
  
  // Define other routes...
  
  module.exports = reportRoute;
  

module.exports = reportRoute;                               
const express = require("express");
const reportRoute = express.Router();
const {postReport }= require("../controller/reportController");

reportRoute.post("/createReport",postReport);
  
module.exports = reportRoute;                               
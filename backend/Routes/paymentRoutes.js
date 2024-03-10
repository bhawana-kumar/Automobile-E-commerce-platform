const express = require("express");
const paymentRoute = express.Router();
const { postPayment} = require("../controller/paymentController");

paymentRoute.post("/createPayment",postPayment); 
module.exports = paymentRoute;
  
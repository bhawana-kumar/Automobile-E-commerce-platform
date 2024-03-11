const express = require("express");
const orderRoute = express.Router();
const { postPayment} = require("../Controller/orderController");

orderRoute.get("/getAllOrderData")
orderRoute.post("/createOrder");
orderRoute.patch("/updateOrder/:orderId");
orderRoute.delete("/deleteOrder/:orderId");

module.exports = orderRoute;


  
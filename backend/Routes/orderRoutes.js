const express = require("express");
// const { verifyAdmin, verifyUser } = require("../utils/verifyToken.js");
const orderRoute = express.Router();

orderRoute.get("/getAllOrderData", (req, res) => {
    // Your code logic here
    // For example, you can send a response back to the client
    res.send("This is the response for /orders/getAllOrderData");
  });
// orderRoute.get("/orders/getOrder/:orderId", verifyUser);
orderRoute.post("/createOrder");
orderRoute.patch("/updateOrder/:orderId");
orderRoute.delete("/deleteOrder/:orderId");

module.exports = orderRoute;

const mongoose=require('mongoose')
const express=require('express')
const cors=require('cors')
const bodyParser = require('body-parser');
require('../ConnectionConfig/connect')

const ex=express();
ex.use(express.json())
ex.use(cors())
ex.use(bodyParser.json());

const userRoute=require("../Routes/usersRoutes")
const buyerRoute=require("../Routes/buyerRoutes")
const sellerRoute=require("../Routes/sellerRoutes")
const adminRoute=require("../Routes/adminRoutes")
const vehicleRoute = require('../Routes/vehiclesRoutes');
const orderRoute=require("../Routes/orderRoutes")
const reportRoute=require("../Routes/reportRoutes")
const paymentRoute=require("../Routes/paymentRoutes")

const searchRoutes = require("../Routes/searchRoutes");


ex.use("/user", userRoute);
ex.use("/buyer", buyerRoute);
ex.use("/vehicleseller", sellerRoute);
ex.use("/admin", adminRoute);
ex.use("/vehicle", vehicleRoute);
ex.use("/order",orderRoute),
ex.use("/report",reportRoute),
ex.use("/search",searchRoutes);
ex.use("/payment",paymentRoute);



ex.listen(4000,  ()=>console.log("listening on port 4000"));

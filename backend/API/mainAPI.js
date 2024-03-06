const mongoose=require('mongoose')
const express=require('express')
const cors=require('cors')
require('../ConnectionConfig/connect')

const ex=express();
ex.use(express.json())
ex.use(cors())

const userRoute=require("../Routes/usersRoutes")
const buyerRoute=require("../Routes/buyerRoutes")
const sellerRoute=require("../Routes/sellerRoutes")
const adminRoute=require("../Routes/adminRoutes")
const vehicleRoute = require('../Routes/vehiclesRoutes');
const orderRoute=require("../Routes/orderRoutes")
const reportRoute=require("../Routes/reportRoutes")

ex.use("/user", userRoute);
ex.use("/buyer", buyerRoute);
ex.use("/vehicleseller", sellerRoute);
ex.use("/admin", adminRoute);
ex.use("/vehicle", vehicleRoute);
ex.use("/order",orderRoute),
ex.use("/report",reportRoute),

ex.listen(4000,  ()=>console.log("listening on port 4000"));

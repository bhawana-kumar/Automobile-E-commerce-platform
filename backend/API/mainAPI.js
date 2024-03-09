const mongoose=require('mongoose')
const express=require('express')
const cors=require('cors')


const authenticateToken = require('../middleware/authMiddleware');
const dotenv = require ("dotenv");
dotenv.config();
connectDb = require('../ConnectionConfig/connect')
connectDb(); 
const ex=express();
ex.use(express.json())
ex.use(cors())

const authRoutes = require('../Routes/authRoutes');
const userRoute=require("../Routes/usersRoutes")
const buyerRoute=require("../Routes/buyerRoutes")
const sellerRoute=require("../Routes/sellerRoutes")
const adminRoute=require("../Routes/adminRoutes")
const vehicleRoute = require('../Routes/vehiclesRoutes');
const orderRoute=require("../Routes/orderRoutes")
const reportRoute=require("../Routes/reportRoutes")

const searchRoutes = require("../Routes/searchRoutes");

ex.use('/auth',authRoutes);
ex.use("/user", userRoute);
ex.use("/buyer", buyerRoute);
ex.use("/vehicleseller", sellerRoute);
ex.use("/admin", adminRoute);
ex.use("/vehicle", vehicleRoute);
ex.use("/order",orderRoute);
ex.use("/report",reportRoute);
ex.use("/search",searchRoutes);

console.log('PORT:', process.env.PORT);

const PORT= process.env.PORT || 4000; 
ex.listen(PORT,  ()=>console.log("listening on port 4000"));

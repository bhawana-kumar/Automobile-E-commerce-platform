const mongoose=require("mongoose")
const con =mongoose.connect("mongodb+srv://dhanashreeg:carDekho@cluster0.mf4uzau.mongodb.net/Car")

if(con){
    console.log("connected");
}
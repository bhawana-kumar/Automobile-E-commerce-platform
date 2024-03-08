const mongoose=require('mongoose')
const con =mongoose.connect('mongodb+srv://krunalkharat010:autoTradeHub2024@cluster1.h5yjvta.mongodb.net/autoTradeHubDb')
// const con =mongoose.connect('mongodb+srv://dhanashreeg:carDekho@cluster0.mf4uzau.mongodb.net/Cars')


if(con){
    console.log("connected");
}
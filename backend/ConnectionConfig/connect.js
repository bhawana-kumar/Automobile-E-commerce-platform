const mongoose=require('mongoose')
const con =mongoose.connect('mongodb+srv://krunalkharat010:autoTradeHub2024@cluster1.h5yjvta.mongodb.net/autoTradeHubDb')

if(con){
    console.log("connected");
}
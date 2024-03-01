const mongoose = require('mongoose')
const conn = mongoose.connect("mongodb://localhost:27017/FET")
if(conn){
    console.log("Connected");
}

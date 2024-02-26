const mongoose = require('mongoose')
const conn = mongoose.connect("mongodb://localhost:27017/database_name")
if(conn){
    console.log("Connected");
}
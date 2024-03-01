const mongoose = require('mongoose')
const conn = mongoose.connect("mongodb://localhost:27017/database_name")
if(conn){
    console.log("Connected");
}
//new code
// const mongoose=require('mongoose')
// mongoose.connect('mongodb://localhost:27017/Angular_with_NodeJS_Aug22')
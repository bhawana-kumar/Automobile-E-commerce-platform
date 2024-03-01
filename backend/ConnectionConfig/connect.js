const mongoose = require('mongoose');

const CONNECTION_STRING = 'mongodb+srv://dhanashreeg:carDekho@cluster0.mf4uzau.mongodb.net/';
const DATABASE_NAME = "Car";

// Connect to MongoDB Atlas
var connectDb = mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: DATABASE_NAME,
})
.then(() => {
  console.log("Connected to MongoDB Atlas");
})
.catch((err) => {
  console.error("Error connecting to MongoDB Atlas:", err);
});
module.exports = connectDb
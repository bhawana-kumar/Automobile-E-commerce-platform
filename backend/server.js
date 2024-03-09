const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const Order = require('../backend/Model/orderModel');
const Buyer = require('../backend/Model/buyer.model');
const Seller = require('../backend/Model/seller.model');
const dbConfig = require("./ConnectionConfig/db.config");

const app = express();
const corsOptions = {
  origin: "http://localhost:8081",
  credentials: true
};

app.use(cors(corsOptions));


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "login-session",
    keys: ["COOKIE_SECRET"], // should use as secret environment variable
    httpOnly: true
  })
);

const db = require("./Model");
const Role = db.role;

db.mongoose
  .connect(`mongodb+srv://dhanashreeg:carDekho@cluster0.mf4uzau.mongodb.net/Car`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

// routes
require("./Routes/auth.routes")(app);
require("./Routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(8080, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}



app.get('/order/:orderId', async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const orders = await Order.find({ buyerId: orderId }).exec();
    if (!orders) {
      return res.status(404).send('No orders found for this user');
    }
    res.status(200).json(orders);
  } catch (err) {
    console.error('Error fetching order data:', err.message);
    res.status(500).send('Internal Server Error');
  }
});

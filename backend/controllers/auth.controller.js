const config = require("../ConnectionConfig/auth.config");
const db = require("../model");
const User = db.user;
const Buyer = require("../model/buyer.model");
const Seller = require("../model/seller.model");
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    phone: req.body.phone,
    role: req.body.role
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles },
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map((role) => role._id);

          user.save((err) => {
            
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
           
            res.send({ message: "User was registered successfully!" });
          });
          
         
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          if(user.role.toLowerCase()== 'buyer'){
            //create buyer
            const buyer = new Buyer({
              buyerId: user._id
            });
            
            buyer.save();
          }else if(user.role.toLowerCase() == 'seller'){
            //create seller
            const seller = new Seller({
              sellerId: user._id
            });
            seller.save()
          }
          res.send({ message: "User was registered successfully!" });
        });
        
      });
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({ message: "Invalid Password!" });
      }

      const token = jwt.sign({ id: user.id },
                              config.secret,
                              {
                                algorithm: 'HS256',
                                allowInsecureKeySizes: true,
                                expiresIn: 7200, // 24 hours
                              });

      var authorities = [];
      var myOrders=[];
      var shortlisted=[];
      var Address=[];
      
      
      


      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }

      req.session.token = token;

      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
        phone: user.phone,
        myOrders:myOrders, 
        shortlisted: shortlisted,
        role: user.role,
        Address: Address,
        token:token,
        status:user.status
        
      });
    });
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};

// Inside auth.controller.js

exports.updateAddress = (req, res) => {
  const userId = req.userId;

  User.findByIdAndUpdate(userId, { $push: { address: req.body.address } }, { new: true })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User not found." });
      }
      res.send({ message: "Address added successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};


exports.updateUsername = (req, res) => {
  const userId = req.userId; 

  User.findByIdAndUpdate(userId, { username: req.body.username }, { new: true })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User not found." });
      }
      res.send({ message: "Username updated successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.updatePassword = (req, res) => {
  const userId = req.userId; 
  const { currentPassword, newPassword, confirmNewPassword } = req.body;

  // Implement validation to ensure new password matches the confirmation
  if (newPassword !== confirmNewPassword) {
    return res.status(400).send({ message: "New password and confirm password do not match." });
  }

  User.findById(userId, (err, user) => {
    if (err) {
      return res.status(500).send({ message: err });
    }

    // Check if current password matches
    if (!bcrypt.compareSync(currentPassword, user.password)) {
      return res.status(401).send({ message: "Invalid current password." });
    }

    // Update password
    user.password = bcrypt.hashSync(newPassword, 8);

    // Save updated user
    user.save((err) => {
      if (err) {
        return res.status(500).send({ message: err });
      }
      res.send({ message: "Password updated successfully!" });
    });
  });
};

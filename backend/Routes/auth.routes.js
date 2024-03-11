

const { verifySignUp, authJwt } = require("../middleware"); // Importing authJwt middleware
const controller = require("../Controller/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  app.post("/api/auth/signout", controller.signout);
  
  app.put("/api/auth/updatePassword", authJwt.verifyToken, controller.updatePassword); 

  app.put("/api/auth/updateAddress", authJwt.verifyToken, controller.updateAddress); 
};
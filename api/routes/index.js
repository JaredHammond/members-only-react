const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
// const messageController = require("../controllers/messageController");
// const profileController = require("../controllers/profileController");


//////////////////////////
/* AUTHORIZATION ROUTES */
//////////////////////////

// POST to create new user object
router.post("/user", authController.user_post);

// POST to login user and get JSON webtoken
router.post("/login", authController.login_post);

// POST to logout user and remove JWT from the list of active JWTs
// router.post("/logout", authController.logout_post);


////////////////////
/* MESSAGE ROUTES */
////////////////////

// router.get("/messages", );

module.exports = router;

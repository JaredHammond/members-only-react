const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
// const messageController = require("../controllers/messageController");
// const profileController = require("../controllers/profileController");


//////////////////////////
/* Authorization Routes */
//////////////////////////

// POST to create new user object
router.post("/user", authController.user_post);

// POST to login user and get JSON webtoken
// router.post("/login", authController.login_post);

// POST to logout user and remove JWT from the list of active JWTs
// router.post("/logout", authController.logout_post);


////////////////////
/* Message routes */
////////////////////
router.get("/messages", );

module.exports = router;

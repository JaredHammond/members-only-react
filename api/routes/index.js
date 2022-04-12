const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
// const messageController = require("../controllers/messageController");
// const profileController = require("../controllers/profileController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("/messages");
});

/* Authorization Routes */
router.post("/user", authController.user_post);

// router.post("/login", authController.login_post);

// router.post("/logout", authController.logout_post);

module.exports = router;

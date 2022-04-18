const express = require("express");
const passport = require("passport");
const router = express.Router();
const authController = require("../controllers/authController");
const messageController = require("../controllers/messageController");
const userController = require("../controllers/userController");
// const profileController = require("../controllers/profileController");

//////////////////////////
/* AUTHORIZATION ROUTES */
//////////////////////////

// POST to login user and get JSON webtoken
router.post("/login", authController.login_post);

router.post("/verifyToken", authController.verify_token_post);

/////////////////
/* USER ROUTES */
/////////////////

router.post("/user", userController.user_post);

router.patch(
  "/user",
  passport.authenticate("jwt", { session: false }),
  userController.user_upgrade_level_patch
);

router.delete(
  "/user",
  passport.authenticate("jwt", { session: false }),
  userController.user_delete
);

////////////////////
/* MESSAGE ROUTES */
////////////////////

router.get(
  "/messages",
  passport.authenticate(["jwt", "anonymous"], { session: false }),
  messageController.messages_get
);

router.post(
  "/message/new",
  passport.authenticate("jwt", { session: false }),
  messageController.new_message_post
);

router.get(
  "/message/:id",
  passport.authenticate("jwt", { session: false }),
  messageController.message_get
);

router.delete(
  "/message/:id",
  passport.authenticate("jwt", { session: false }),
  messageController.message_delete
);

module.exports = router;

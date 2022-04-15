const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const Message = require("../models/message");
const jwt = require("jsonwebtoken");

exports.user_post = [
  body("first_name", "First name is required")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("family_name", "Family name is required")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("username", "Username is required").trim().exists().escape(),
  body("password")
    .trim()
    .exists()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .escape(),
  body("confirmPassword", "Passwords do not match")
    .escape()
    .custom((value, { req }) => value === req.body.password),

  function (req, res, next) {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      // validation errors, so re-render with sanitized inputs
      res.status(400);
      res.json({
        code: 400,
        messages: errors.array(),
      });
      return;
    }
    // No validation errors, so hash and save User to database
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return next(err);
      }
      User({
        first_name: req.body.first_name,
        family_name: req.body.family_name,
        username: req.body.username,
        password_hash: hash,
      }).save((err) => {
        if (err) {
          console.log(err);
          return next(err);
        }
        res.sendStatus(201);
      });
    });
  },
];

exports.user_upgrade_level_patch = [
  body("userLevel", 'User level must be "member" or "admin"')
    .isIn(["member", "admin"])
    .escape(),
  body("secret", "Must have a secret").exists().escape(),

  async function (req, res, next) {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      // validation errors, so re-render with sanitized inputs
      res.status(400);
      res.json({
        code: 400,
        messages: errors.array(),
      });
      return;
    }

    // Check if user is already at the requested level
    if (req.user["is_" + req.body.userLevel]) {
      return res.status(400).send("User is already a " + req.body.userLevel);
    }

    // Check to make sure a non-member isn't trying to jump straight to admin
    if (req.body.userLevel === "admin" && !req.user.is_member) {
      return res.sendStatus(403);
    }

    const secrets = {
      admin: process.env.ADMIN_SECRET,
      member: process.env.MEMBER_SECRET,
    };

    // Check if they got the secret password right
    if (req.body.secret !== secrets[req.body.userLevel]) {
      return res.status(400).send("Incorrect secret password");
    }

    // If the request makes it this far, it's good to update
    const query = {
      ["is_" + req.body.userLevel]: true,
    };

    const updatedUser = await User.findByIdAndUpdate(req.user._id, query, {
      new: true,
    });

    // Strip out password hash
    const { password_hash, ...rest } = updatedUser.toJSON();

    // generate a new token with the updated user status
    const token = jwt.sign(updatedUser.toJSON(), process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    return res.status(200).json({
      user: rest,
      token,
    });
  },
];

exports.user_delete = async (req, res, next) => {
  await Message.deleteMany({ user: req.user._id }).catch((err) => next(err));

  await User.findByIdAndDelete(req.user._id).catch((err) => next(err));

  return res.sendStatus(200);
};

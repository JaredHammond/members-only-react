const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

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

    // Check secret
    if (res.body.userLevel === "member") {
    }

    if (req.body.userLevel === "member") {
      if (req.user.is_member) {
        return res.status(400).send("User is already a member");
      }

      const updatedUser = await User.findByIdAndUpdate(req.user._id, {
        is_member: true,
      });
      const { password_hash, ...rest } = updatedUser;

      return res.status(200).json(rest);
    }
  },
];

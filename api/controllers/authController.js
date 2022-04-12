const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const passport = require('passport')
const jwt = require('jsonwebtoken')

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
    console.log("made it past validation");
    // No validation errors, so hash and save User to database
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        console.log("error in hash");
        return next(err);
      }
      console.log("password hashed");
      User({
        first_name: req.body.first_name,
        family_name: req.body.family_name,
        username: req.body.username,
        password_hash: hash,
      }).save((err) => {
        if (err) {
          console.log(err);
          console.log("error in user save");
          return next(err);
        }
        console.log("user saved");
        res.sendStatus(201);
      });
    });
  },
];

exports.login_post = (req, res, next) => {
  passport.authenticate('local', {session: false}, (err, user) => {
    if (err) {
      console.log("auth error")
      return res.status(400).json({
        code: 400,
        message: err,
        user: user
      });
    }

    if (!user) {
      return res.status(400).json({
        code: 400,
        message: 'No user by that name'
      })
    }
  
    req.login(user, {session: false}, (err) => {
      if (err) {
        res.send(err);
      }
  
    // generate a signed son web token with the contents of user object and return it in the response
    const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET || 'secret');
      return res.json({user, token});
    });
  })(req, res);
}

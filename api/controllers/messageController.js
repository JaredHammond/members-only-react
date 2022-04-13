const Message = require("../models/message");
const { body, validationResult } = require("express-validator");

exports.messages_get = async (req, res, next) => {
  let messages = await Message.find()
    .sort({ timestamp: -1 })
    .populate("user", { select: "name" })
    .exec()
    .catch((err) => next(err));

  return res.status(200).json(messages);
};

exports.new_message_post = [
  body("post_title", "Must have a post title")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("post_body", "Post must have a message")
    .trim()
    .isLength({ min: 1, max: 500 })
    .escape(),
  (req, res, next) => {
    console.log(req.user);
    // Look for validation errors
    let errors = validationResult(req);

    // If validation errors, rerender with errors
    if (!errors.isEmpty()) {
      res.status(400).json(errors.array());
      return;
    }

    // // Create a new message document and save it to the db
    // let message = new Message({
    //   title: req.body.post_title,
    //   message: req.body.post_body,
    //   user: req.user,
    // }).save((err) => {
    //   if (err) {
    //     return next(err);
    //   }

    //   // Success, so redirect back
    //   res.redirect("/");
    // });
  },
];

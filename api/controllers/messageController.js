const Message = require("../models/message");
const { body, validationResult } = require("express-validator");
const message = require("../models/message");

exports.messages_get = async (req, res, next) => {
  let messages = await Message.find()
    .sort({ timestamp: -1 })
    .populate('user')
    .exec()
    .catch((err) => next(err));

  messages.forEach(message => {
    message = message.toJSON()
    if (!req.user?.isMember) {
      message.user = 'Anon'
    } else {
      message.user = message.user.name
    }
  })

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
    // Look for validation errors
    let errors = validationResult(req);

    // If validation errors, rerender with errors
    if (!errors.isEmpty()) {
      res.status(400).json(errors.array());
      return;
    }

    // Create a new message document and save it to the db
    Message({
      title: req.body.post_title,
      message: req.body.post_body,
      user: req.user._id,
    }).save((err) => {
      if (err) {
        return next(err);
      }

      // Success, so send success status
      res.sendStatus(201);
    });
  },
];

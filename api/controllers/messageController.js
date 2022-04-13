const Message = require("../models/message");
const { body, validationResult } = require("express-validator");


exports.messages_get = async (req, res, next) => {
  let messages = await Message.find()
    .sort({ timestamp: -1 })
    .populate("user")
    .exec()
    .catch((err) => next(err));

  console.log(req.user?.is_member);

  let response = [];
  messages.forEach((message) => {
    // If the user is not authenticated or is not a member, they don't get the author's name
    if (!req.user?.is_member) {
      response.push(cleanUpUserData(message, true))
    } else {
      response.push(cleanUpUserData(message, false));
    }
  });

  return res.status(200).json(response);
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

exports.specific_message_get = async (req, res, next) => {
  try {
      let message = await Message.findById(req.params.id)
      .populate('user')
      .exec()
      .catch(err => next(err))
    
    message = cleanUpUserData(message, false)
    res.status(200).json(message);
  } catch (error) {
    console.log(error)
  }
}

/* Utils for message controller */
function cleanUpUserData(message, makeAnonymous) {
    // Destructure user document out of message document
  // (toJSON removes all the underlying methods and whatnot)
  const { user, ...rest } = message.toJSON();

  // If the user is not authenticated or is not a member, they don't get the author's name
  if (makeAnonymous) {
    rest.user = "Anonymous";
    return rest
  } else {
    rest.user = message.user.name;
    return rest
  }
}
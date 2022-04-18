const Message = require("../models/message");
const { body, validationResult } = require("express-validator");

exports.messages_get = async (req, res, next) => {
  try {
    let messages = await Message.find()
      .sort({ timestamp: -1 })
      .populate("user")
      .exec()
      .catch((err) => next(err));

    let response = [];
    messages.forEach((message) => {
      // If the user is not authenticated or is not a member, they don't get the author's name
      if (
        req.user?.is_member ||
        String(message.user._id) === String(req?.user?._id)
      ) {
        response.push(cleanUpUserData(message, false));
      } else {
        response.push(cleanUpUserData(message, true));
      }
    });

    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
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
      res.status(201).json({
        code: 201,
      });
    });
  },
];

exports.message_get = async (req, res, next) => {
  try {
    let message = await Message.findById(req.params.id)
      .populate("user")
      .exec()
      .catch((err) => next(err));

    message = cleanUpUserData(message, false);
    res.status(200).json(message);
  } catch (err) {
    next(err);
  }
};

exports.message_delete = async (req, res, next) => {
  try {
    let message = await Message.findById(req.params.id).exec();

    // Only authors of a message and admins can delete messages. Everyone else gets 403'd into the shadow realm.
    if (
      String(message.user._id) !== String(req.user._id) &&
      !req.user.is_admin
    ) {
      return res.status(403).send("forbidden");
    }

    await Message.deleteOne({ _id: message._id });

    return res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

/* Utils for message controller */
function cleanUpUserData(message, makeAnonymous) {
  // Destructure user document out of message document
  // (toJSON removes all the Mongoose methods and whatnot)
  const { user, ...rest } = message.toJSON();

  // If the user is not authenticated or is not a member, they don't get the author's name
  if (makeAnonymous) {
    rest.user = {
      name: "Anonymous",
    };
    return rest;
  } else {
    rest.user = {
      name: message.user.name,
      _id: message.user._id,
    };
    return rest;
  }
}

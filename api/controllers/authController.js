const passport = require("passport");
const jwt = require("jsonwebtoken");

exports.login_post = (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user) => {
    if (err) {
      console.log("auth error", err);
      return res.status(400).json({
        code: 400,
        message: err,
        user: user,
      });
    }

    if (!user) {
      return res.status(400).json({
        code: 400,
        messages: ["Username or password is wrong"],
      });
    }

    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }

      // Removes Mongoose methods/prototypes then extracts password hash out of the remaining object
      // Rest object is sent to client as "user".
      const { password_hash, ...rest } = user.toJSON();

      // generate a signed son web token with the contents of user object and return it in the response
      const token = jwt.sign(rest, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      return res.status(200).json({
        code: 200,
        user: rest,
        token,
      });
    });
  })(req, res);
};

exports.verify_token_post = (req, res, next) => {
  try {
    const user = jwt.verify(req.body.token, process.env.JWT_SECRET);
    return res.status(200).json({
      code: 200,
      user: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      code: 400,
      user: null,
    });
  }
};

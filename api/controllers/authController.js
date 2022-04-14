const passport = require("passport");
const jwt = require("jsonwebtoken");

exports.login_post = (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user) => {
    if (err) {
      console.log("auth error");
      return res.status(400).json({
        code: 400,
        message: err,
        user: user,
      });
    }

    if (!user) {
      return res.status(400).json({
        code: 400,
        message: "No user by that name",
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
      const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      return res.json({ user: rest, token });
    });
  })(req, res);
};

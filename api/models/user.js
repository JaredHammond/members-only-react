const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  username: { type: String, required: true, maxLength: 100 },
  password_hash: { type: String, required: true },
  is_member: { type: Boolean, default: false },
  is_admin: { type: Boolean, default: false },
});

// Virtual property of name
UserSchema.virtual("name").get(function () {
  return this.first_name + " " + this.last_name;
});

// Virtual member level property
UserSchema.virtual("membership_level").get(function () {
  if (this.is_admin) {
    return "Admin";
  } else if (this.is_member) {
    return "Member";
  } else {
    return "Non-member";
  }
});

// Export model
module.exports = mongoose.model("User", UserSchema);

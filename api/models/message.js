const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const MessageSchema = new Schema({
  title: { type: String, required: true, maxLength: 100 },
  message: { type: String, required: true, maxLength: 500 },
  timestamp: { type: Date, required: true, default: Date.now() },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

MessageSchema.virtual("timestamp_formatted").get(function () {
  return DateTime.fromJSDate(this.timestamp).toLocaleString(
    DateTime.DATETIME_SHORT
  );
});

module.exports = mongoose.model("Message", MessageSchema);

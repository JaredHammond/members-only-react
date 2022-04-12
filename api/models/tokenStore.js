const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TokenStoreSchema = new Schema({
  tokens: [{type: String}]
});

// Export model
module.exports = mongoose.model("TokenStore", TokenStoreSchema);

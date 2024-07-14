const mongoose = require("mongoose");
require("./books.js");
require("./user.js");

const lendingSchema = new mongoose.Schema({
  lendedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  lendedBook: { type: mongoose.Schema.Types.ObjectId, ref: "Books" },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

module.exports = mongoose.model("Lendings", lendingSchema);

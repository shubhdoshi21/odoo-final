const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    ISBN: { type: String, required: true },
    quantity: { type: Number, required: true },
    title: { type: String },
    description: { type: String },
    authors: [{ type: String }],
    year: { type: String },
    language: { type: String },
    genre: {
      type: String,
      required: true,
      enum: [
        "Fiction",
        "Non-Fiction",
        "Young-Adult",
        "Children-Books",
        "Graphic-Novels",
      ],
    },
    thumbnail: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Books", bookSchema);

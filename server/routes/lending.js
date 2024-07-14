const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/asyncMiddleware.js");
const isLoggedIn = require("../middleware/isLoggedIn.js");
const Book = require("../models/books.js");
const User = require("../models/user.js");
const Lend = require("../models/lending.js");

router.post(
  "/lendBook",
  isLoggedIn,
  catchAsync(async (req, res) => {
    const { bookId, endDate, email } = req.body;
    const book = await Book.findById(bookId);
    if (!book)
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Invalid book ID",
        data: null,
      });

    const user = await User.findOne(email);

    if (book.quantity >= 0) {
      book.quantity = book.quantity - 1;
      user.borrowedBooks.push(bookId);
      user.bookHistory.push(bookId);

      const lend = new Lend({
        lendedBy: req.user.user._id,
        lendedBook: bookId,
        startDate: Date.now(),
        endDate
      });

      const lendedDetails = await lend.save();
      await user.save();
      await book.save();
      return res.status(200).json({
        success: false,
        status: 400,
        message: "Book lending successfull",
        data: lendedDetails,
      });
    } else {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Book sold out",
        data: null,
      });
    }
  })
);

router.post(
  "/unlendBook",
  isLoggedIn,
  catchAsync(async (req, res) => {
    const { bookId } = req.body;
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Invalid book ID",
        data: null,
      });
    }
    const user = await User.findById(req.user.user._id);

    if (user.borrowedBooks.includes(bookId)) {
      book.quantity = book.quantity + 1;
      user.borrowedBooks.pull(bookId);

      const lend = Lend.findOne({ lendedBy: user._id, lendedBook: bookId });
      if (!lend) {
        return res.status(404).json({
          success: false,
          status: 404,
          message: "Lend record not found",
          data: null,
        });
      }
      await Lend.findByIdAndDelete(lend._id);

      return res.status(200).json({
        success: true,
        status: 200,
        message: "Unlended successfully",
        data: null,
      });
    } else {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Book not lended",
        data: null,
      });
    }
  })
);

module.exports = router;

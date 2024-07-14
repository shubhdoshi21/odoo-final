const express = require("express");
const router = express.Router();
const Book = require("../models/books.js");
const catchAsync = require("../utils/asyncMiddleware.js");
const isLoggedIn = require("../middleware/isLoggedIn.js");
const isAdmin = require("../middleware/isAdmin.js");
const axios = require("axios");

router.get(
  "/getAllBooks",
  isLoggedIn,
  catchAsync(async (req, resp) => {
    const books = await Book.find();
    resp.json({
      success: true,
      status: 200,
      message: "Books retrieved successfully",
      data: books,
    });
  })
);

router.get(
  "/getBook",
  isLoggedIn,
  catchAsync(async (req, resp) => {
    const book = await Book.findById(req.body.id);
    if (!book)
      return resp.status(400).json({
        success: false,
        status: 400,
        message: "Invalid book ID",
        data: null,
      });

    resp.json({
      success: true,
      status: 200,
      message: "Book retrieved successfully",
      data: book,
    });
  })
);

router.post(
  "/addBook",
  [isLoggedIn, isAdmin],
  catchAsync(async (req, res) => {
    const { ISBN, quantity, genre } = req.body;
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`)
      .then(async (resp) => {
        const newBook = new Book({
          ISBN,
          quantity,
          genre,
          title: resp.data.items[0].volumeInfo.title,
          language: resp.data.items[0].volumeInfo.language,
          description: resp.data.items[0].volumeInfo.description,
          authors: resp.data.items[0].volumeInfo.authors,
          year: resp.data.items[0].volumeInfo.publishedDate,
          thumbnail: resp.data.items[0].volumeInfo.imageLinks.smallThumbnail,
        });

        await newBook.save();
        res.status(200).json({
          success: true,
          status: 200,
          message: "Book added successfully",
          data: null,
        });
      })
      .catch((err) => console.log(err));
  })
);

router.post(
  "/updateQuantity",
  [isLoggedIn, isAdmin],
  catchAsync(async (req, resp) => {
    const { quantity, ISBN } = req.body;
    const book = await Book.findOne({ ISBN });
    if (!book)
      return resp.status(404).json({
        success: false,
        status: 404,
        message: "Book not found",
        data: null,
      });

    book.quantity = book.quantity + quantity;
    const updatedBook = await book.save();
    resp.status(200).json({
      success: true,
      status: 200,
      message: "Book quantity updated successfully",
      data: updatedBook,
    });
  })
);

router.post(
  "/searchBookByTitle",
  [isLoggedIn],
  catchAsync(async (req, resp) => {
    const books = await Book.find({
      title: { $regex: req.body.title, $options: "i" },
    });
    if (books.length === 0)
      return resp.status(404).json({
        success: false,
        status: 404,
        message: "No book found with the given input",
        data: null,
      });

    resp.json({
      success: true,
      status: 200,
      message: "Books retrieved successfully",
      data: books,
    });
  })
);

router.delete(
  "/deleteBook",
  [isLoggedIn, isAdmin],
  catchAsync(async (req, resp) => {
    const book = await Book.findOneAndDelete(req.body.ISBN);
    if (!book)
      return resp.status(404).json({
        success: false,
        status: 404,
        message: "No book found with the given input",
        data: null,
      });

    return resp.json({
      success: true,
      status: 200,
      message: "Book deleted successfully",
      data: null,
    });
  })
);

router.post(
  "/filter",
  isLoggedIn,
  catchAsync(async (req, res) => {
    const { type, value } = req.body;
    if (type === "authors") {
      const filteredBooks = await Book.find({ authors: { $in: [value] } });

      if (filteredBooks.length === 0) {
        res.json({
          success: false,
          status: 404,
          message: "Books not found",
          data: null,
        });
      } else {
        res.json({
          success: true,
          status: 200,
          message: "Books found",
          data: filteredBooks,
        });
      }
    } else {
      const filter = {};
      filter[type] = value;
      const filteredBooks = await Book.find(filter);

      if (filteredBooks.length === 0) {
        res.json({
          success: false,
          status: 404,
          message: "Books not found",
          data: null,
        });
      } else {
        res.json({
          success: true,
          status: 200,
          message: "Books found",
          data: filteredBooks,
        });
      }
    }
  })
);

router.get(
  "/getLatests",
  isLoggedIn,
  catchAsync(async (req, res) => {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const latestBooks = await Book.find({
      createdAt: { $gte: thirtyDaysAgo },
    }).sort({ createdAt: -1 });

    if (latestBooks.length === 0) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "No latest books available",
        data: null,
      });
    }

    return res.json({
      success: true,
      status: 200,
      message: "Latest books from the last 30 days retrieved successfully",
      data: latestBooks,
    });
  })
);

module.exports = router;

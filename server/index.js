require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("./config/passport.js");
const error = require("./utils/error.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cookieParser = require("cookie-parser");
const localAuth = require("./routes/localAuth.js");
const googleAuth = require("./routes/googleAuth.js");
const users = require("./routes/users.js");
const app = express();
const port = process.env.PORT || 3000;
const payment = require("./routes/payment.js");
const books = require("./routes/books.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }, // 1 week
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/auth/api/v1/local", localAuth);
app.use("/auth/api/v1/google", googleAuth);
app.use("/users/api/v1", users);
app.use("/payment/api/v1", payment);
app.use("/books/api/v1", books);
app.use(error);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(port, () => console.log(`Listening on port ${port}...`));
  })
  .catch((err) => {
    console.log(err);
  });

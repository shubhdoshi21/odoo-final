require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("./config/passport.js");
const error = require("./utils/error.js");
const session = require("express-session");
const cron = require('node-cron');
const MongoStore = require("connect-mongo");
const cookieParser = require("cookie-parser");
const User = require("./models/user.js")
const { sendEmail } = require("./utils/nodeMailer.js")
const localAuth = require("./routes/localAuth.js");
const googleAuth = require("./routes/googleAuth.js");
const users = require("./routes/users.js");
const lending = require("./routes/lending.js");
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
app.use("/lending/api/v1", lending);
app.use(error);

cron.schedule('0 0 * * *', async () => { 
  try {
    const users = await User.find({ endDate: { $exists: true } });

    for (const user of users) {
      const { endDate, email } = user;
      const oneDayBeforeEndDate = moment(endDate).subtract(1, 'days');
      const currentDate = moment();
      if (currentDate.isSame(oneDayBeforeEndDate, 'day')) {
        const subject = 'Reminder: Your End Date is Tomorrow!';
        const text = 'This is a reminder that your book lend date ends tomorrow.';

        await sendEmail(email, subject, text);
      }
    }
  } catch (err) {
    console.error('Error fetching users or sending emails:', err);
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(port, () => console.log(`Listening on port ${port}...`));
  })
  .catch((err) => {
    console.log(err);
  });

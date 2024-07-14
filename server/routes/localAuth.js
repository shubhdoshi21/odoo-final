const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/asyncMiddleware.js");
const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const isLoggedIn = require("../middleware/isLoggedIn.js");
const passport = require("passport");
const Joi = require("joi");

router.post(
  "/register",
  catchAsync(async (req, res, next) => {
    const schema = Joi.object({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
      password: Joi.string()
        .min(8)
        .pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
        )
        .required()
        .messages({
          "string.pattern.base":
            "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.",
        }),
      phoneNumber: Joi.string(),
      name: Joi.string(),
    });

    const { error } = schema.validate(req.body);
    if (error)
      return res.status(400).json({
        status: 400,
        success: false,
        message: error.details[0].message,
      });

    const { email, password } = req.body;

    const userRepeated = await User.findOne({ email });
    if (userRepeated)
      return res.status(400).json({
        success: false,
        status: 400,
        message: "User with the given email already exists",
        data: null,
      });

    const salt = await bcrypt.genSalt(10);
    const user = new User({
      email,
      password: await bcrypt.hash(password, salt),
      name: req.body.name ? req.body.name : "",
      phoneNumber: req.body.phoneNumber ? req.body.phoneNumber : "",
      authType: "local",
    });
    await user.save();

      res.json({
        success: true,
        status: 200,
        message: "User registered successfully",
        data: {
          id: user._id,
          email: user.email,
          isAdmin: user.isAdmin,
          name: user.name,
          phoneNumber: user.phoneNumber,
        },
      });
  })
);

router.post("/login", passport.authenticate("local"), (req, res) => {
  const { _id, email, isAdmin, name, phoneNumber, authType } = req.user.user;

  return res.status(200).json({
    success: true,
    status: 200,
    message: "Logged in successfully",
    data: { _id, email, isAdmin, name, phoneNumber, authType },
  });
  //  res.redirect(`http://localhost:3001`);
  // //res.redirect(`/home`);
});

router.post("/logout", isLoggedIn, (req, res, next) => {
  req.logout((error) => {
    if (error) {
      return next(error);
    }
    req.session.destroy((error) => {
      if (error) {
        return next(error);
      }

      res.clearCookie("connect.sid");

      res.json({
        success: true,
        status: 200,
        message: "Logged out successfully",
        data: null,
      });
    });
  });
});

router.post(
  "/resetPassword",
  isLoggedIn,
  catchAsync(async (req, res, next) => {
    const { currentPassword, newPassword, repeatPassword } = req.body;
    const userId = req.user.user._id;

    if (newPassword !== repeatPassword) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "New password and repeat password do not match",
        data: null,
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "User not found",
        data: null,
      });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Current password is incorrect",
        data: null,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await User.findByIdAndUpdate(userId, { password: hashedPassword });

    res.json({
      success: true,
      status: 200,
      message: "Password reset successfully",
      data: null,
    });
  })
);

module.exports = router;

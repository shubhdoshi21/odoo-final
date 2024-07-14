module.exports = (req, res, next) => {
    if (req.user.user.isLibrarian) return next();
    return res.json({
      success: false,
      status: 401,
      message: "Unauthorized",
      data: null,
    });
  };
module.exports = (req, res, next) => {
    if (req.user.user.isAdmin) return next();
    return res.json({
      success: false,
      status: 401,
      message: "Unauthorized",
      data: null,
    });
  };
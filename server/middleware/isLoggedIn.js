module.exports = (req, res, next) => {
  if (req.isAuthenticated && req.isAuthenticated()) return next();
  return res.json({
    success: false,
    status: 401,
    message: "Unauthorized",
    data: null,
  });
};

module.exports = function(err,req,res,next) {
    res.json({
        success: false,
        status: 500,
        message: "Internal server error",
        data: null,
    })
}
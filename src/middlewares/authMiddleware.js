
function isAuthenticated(req, res, next){
    if(req.isAuthenticated){
        return next();
    }
    res.status(400).json({
        success: false,
        message: "UnAuthrozied Please login"
    })
}
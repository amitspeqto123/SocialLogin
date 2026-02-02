
// Session based authentications
function isAuthenticated(req, res, next) {  
  if (req.isAuthenticated) {
    return next();
  }
  res.status(400).json({
    success: false,
    message: "UnAuthrozied Please login",
  });
}

// jwt based authentictions
export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(401).json({
    success: false,
    message: "UnAuthrozied Please login"
  })

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user; // attach user info
    next();
  });
};

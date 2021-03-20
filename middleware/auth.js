const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {

  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(res.status(401).json({ success: false, error: "Not authorized to access this route." }));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    let user;

    //console.log('decoded: ' + decoded);
    User.findById(decoded.id, (data) => {
      user = data;

      if (user.length === 0) {
        return next(res.status(404).json({ success: false, error: "No user found with this id"})); 
      }

      req.user = user[0];
      next();

    }, (err) => {
      res.status(500).json({ success: false, error: err });
    });

  } catch (err) {
    return next(res.status(401).json({ success: false, error: "Not authorized to access this route." }));
  }
};
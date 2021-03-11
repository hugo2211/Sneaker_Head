require('dotenv').config();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  const { username, password } = req.body;

  console.log(username, password);

  User.create(username, password, (data) => {
    res.status(200).json({ success: true, user: data });
  }, (err) => {

    console.log('controller error: ', err);

    if (err.errno === 1062) {
      res.status(500).json({ success: false, error: 'Username already exsists.'});
    } else {
      res.status(500).json({ success: false, error: err });
    }
    
  })
};

exports.login = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(res.status(400).json({ success: false, error: "Please provide an email and password" }));
  }

  console.log(username, password);

  User.login(username, password, (user) => {
    if (user.length === 0) {
      return next(res.status(401).json({ success: false, error: "Invalid Credentials"}));
    } 

    //res.status(200).json({ success: true, user: user});
    sendToken(user, 200, res);
  }, (err) => {
    res.status(500).json({ success: false, error: err})
  })
}

const sendToken = (user, statusCode, res) => {
  const token = jwt.sign({ id: user[0].web_id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  res.status(statusCode).json({ success: true, token, user: user[0] });
}
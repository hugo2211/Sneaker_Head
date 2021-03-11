const User = require("../models/User");

exports.register = (req, res) => {
  const { username, password } = req.body;

  console.log(username, password);

  User.create(username, password, (data) => {
    res.status(200).json({ success: true, user: data });
  }, (err) => {
    res.status(500).json({ success: false, error: err });
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

    res.status(200).json({ success: true, user: user});
  }, (err) => {
    res.status(500).json({ success: false, error: err})
  })
}
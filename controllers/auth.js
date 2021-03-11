const User = require("../models/User");

exports.register = async (req, res) => {
  const { username, password } = req.body;

  console.log(username, password);

  User.create(username, password, (data) => {
    res.status(200).json({ success: true, user: data });
  }, (err) => {
    res.status(500).json({ success: false, message: err });
  })
};
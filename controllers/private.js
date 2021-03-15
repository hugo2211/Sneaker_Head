require('dotenv').config();
const axios = require('axios');

exports.getPrivateData = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      data: "You got access to the private data in this route",
    });
};

exports.getChatProjectId = (req, res, next) => {
  res.status(200).json({ success: true, data: process.env.CHAT_PROJECT_ID });
  //Need to create new project id
}

exports.createUser = (req, res, next) => {
  
}
require("dotenv").config();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const axios = require("axios");

exports.register = async (req, res) => {
  const { username, password, email, firstName, lastName } = req.body;

  console.log(req.body);

  const authObject = {
    "PRIVATE-KEY": process.env.CHAT_PRIVATE_KEY,
  };

  const requestData = {
    username: username,
    secret: password,
  };

  //API call to create user for chat services
  try {
    const { data } = await axios.post(
      "https://api.chatengine.io/users/",
      requestData,
      { headers: authObject }
    );

    console.log("chat api data: ", data);
    
    //Pass in usernmae, password, and res to create user
    createUser(username, password, email, firstName, lastName, res);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error });
  }

  
};

exports.login = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, error: "Please provide an email and password" });
  }

  //console.log(username, password);

  User.login(
    username,
    password,
    (user) => {
      if (user.length === 0) {
        return res
          .status(401)
          .json({ success: false, error: "Invalid Credentials" });
      }

      //res.status(200).json({ success: true, user: user});
      sendToken(user, 200, res);
    },
    (err) => {
      res.status(500).json({ success: false, error: err });
    }
  );
};

const sendToken = (user, statusCode, res) => {
  const token = jwt.sign({ id: user[0].web_id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  res.status(statusCode).json({ success: true, token, user: user[0] });
};

const createUser = (username, password, email, first_name, last_name, response) => {
  User.create(
    username,
    password,
    email,
    first_name,
    last_name,
    (data) => {
      response.status(200).json({ success: true, user: data });
    },
    (err) => {
      console.log("controller error: ", err);

      if (err.errno === 1062) {
        response
          .status(500)
          .json({ success: false, error: "Username already exsists." });
      } else {
        response.status(500).json({ success: false, error: err });
      }
    }
  );
}

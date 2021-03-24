require("dotenv").config();
const axios = require("axios");
var FormData = require("form-data");
const User = require("../models/User");
var fs = require("fs");

exports.getPrivateData = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "You got access to the private data in this route",
  });
};

exports.getChatProjectId = (req, res, next) => {
  res.status(200).json({ success: true, data: process.env.CHAT_PROJECT_ID });
  //Need to create new project id
};

exports.createPost = async (req, res) => {
  // Get info from create post from
  let imageStringFormatted = req.body.image.split(",")[1];
  let { web_id, brand_name, shoe_model, color, year, post_action } = req.body;

  // Format incoming form data for database
  web_id = Number(web_id);
  year = Number(year);
  color = JSON.stringify(color);
  let status_name = post_action;

  console.log("web_id", web_id, typeof web_id); //Need to be Number
  console.log("brand_name:", brand_name, typeof brand_name); //Need to be String
  console.log("shoe_model", shoe_model, typeof shoe_model); //Need to be String
  console.log("color", color, typeof color); //Need to be Stringd
  console.log("year", year, typeof year); //Need to be Number
  console.log("status_name", status_name, typeof status_name); //Need to be String

  var form = new FormData();
  form.append("image", imageStringFormatted);

  try {
    const response = await axios.post(
      "https://api.imgbb.com/1/upload?key=2e66a31ff52bfeb6857a826c3779a43f",
      form,
      { headers: form.getHeaders() }
    );

    console.log("api response", response.data);
    console.log("image url", response.data.data.display_url);
    const url = response.data.data.display_url;

    User.createPost(
      brand_name,
      shoe_model,
      color,
      year,
      status_name,
      web_id,
      url,
      (data) => {
        res.status(200).json({ success: true, data: data });
      },
      (err) => {
        console.log("controller error: ", err);

        if (err.errno === 1062) {
          res
            .status(500)
            .json({ success: false, error: "Username already exsists." });
        } else {
          res.status(500).json({ success: false, error: err });
        }
      }
    );

  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.config);
    res.status(500).json({ success: false, error: error });
  }
};

exports.getUserShoes = (req, res, next) => {
  const web_id = req.query.userid;
  console.log(web_id);

  User.getShoes(web_id, data => {
    res.status(200).json({ success: true, data: data });
  }, err => {
    console.log("get user shoes", err);
    res.status(500).json({ success: false, error: err });
  })
};

exports.getFeedShoes = (req, res) => {
  const web_id = req.query.userid;
  console.log(web_id);

  User.getFeed(web_id, data => {
    res.status(200).json({ success: true, data: data });
  }, err => {
    console.log("get feed shoes", err);
    res.status(500).json({ success: false, error: err });
  })
};


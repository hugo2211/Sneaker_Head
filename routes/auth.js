const express = require("express");
const router = express.Router();

// Controllers
const {
  register,
} = require("../controllers/auth");

router.route("/register").post(register);

module.exports = router;
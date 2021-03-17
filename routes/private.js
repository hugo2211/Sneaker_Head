const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const { getChatProjectId } = require("../controllers/private");

router.route("/").get(protect, getChatProjectId); 

module.exports = router;
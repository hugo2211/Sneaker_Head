const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const { getChatProjectId, getUserShoes } = require("../controllers/private");

router.route("/").get(protect, getChatProjectId); 
router.route("/shoes").get(protect, getUserShoes); 

module.exports = router;
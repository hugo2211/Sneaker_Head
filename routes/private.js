const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const { getChatProjectId, getUserShoes, createPost } = require("../controllers/private");

router.route("/").get(protect, getChatProjectId); 
router.route("/shoes").get(protect, getUserShoes); 
router.route("/post").post(protect, createPost);

module.exports = router;
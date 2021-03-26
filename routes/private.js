const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const { getChatProjectId, getUserShoes, createPost, getFeedShoes, getSingleShoe, deleteShoe } = require("../controllers/private");

router.route("/").get(protect, getChatProjectId); 
router.route("/shoe").get(protect, getSingleShoe);
router.route("/shoe").delete(protect, deleteShoe);
router.route("/shoes").get(protect, getUserShoes);
router.route("/feed").get(protect, getFeedShoes); 
router.route("/post").post(protect, createPost);

module.exports = router;
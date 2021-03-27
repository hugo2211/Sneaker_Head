const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const { getChatProjectId, getUserShoes, createPost, getFeedShoes, getSingleShoe, deleteShoe, updateShoe, addComment, getComments } = require("../controllers/private");

router.route("/").get(protect, getChatProjectId); 
router.route("/shoe").get(protect, getSingleShoe);
router.route("/shoe").delete(protect, deleteShoe);
router.route("/shoe").put(protect, updateShoe);
router.route("/shoes").get(protect, getUserShoes);
router.route("/feed").get(protect, getFeedShoes); 
router.route("/post").post(protect, createPost);
router.route("/comments").post(protect, addComment);
router.route("/comments").get(protect, getComments);

module.exports = router;
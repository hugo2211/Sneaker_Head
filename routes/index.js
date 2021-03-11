const path = require("path");
const router = require("express").Router();

// API Routes
/* router.use("/api", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Here is a test to make sure the api is working",
  });
}); */

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
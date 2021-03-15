exports.getPrivateData = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      data: "You got access to the private data in this route",
    });
};

exports.getChatProjectId = (req, res, next) => {
  res.status(200).json({ success: true, data: '365fe33f-2342-4d93-abf4-fe0036867e62' });
}
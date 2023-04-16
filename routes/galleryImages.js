const upload = require("../helpers/multer");
const setGalleryImages = require("../controller/setGalleryImages");
const setCoverImage = require("../controller/setCoverImage");
const getUserImages = require("../controller/getUserImages");

const express = require("express"),
  router = express.Router();

router.post("/setGalleryImages", upload.array("image"), (req, res) => {
  try {
    setGalleryImages(req, res);
  } catch (err) {
    res.json({ error: err });
  }
});

router.post("/setCoverImage", upload.array("image"), (req, res) => {
  try {
    setCoverImage(req, res);
  } catch (err) {
    res.json({ error: err });
  }
});
router.post("/getUserImages", (req, res) => {
  getUserImages(req, res);
});
module.exports = router;

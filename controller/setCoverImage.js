const { executeStoredProcedure } = require("../helpers/storedProcedure");
const setUserCoverImage = async (req, res) => {
  let values = [];
  if (req.body.galleryImages != null && req.body.coverPhoto != null) {
    const galleryImages = req.body.galleryImages.length;
    const coverPhoto = req.body.coverPhoto.length;
    values = [req.body.userId, galleryImages, coverPhoto];
  } else {
    const coverPhotoURI = req.files.map(
      (file) => `uploads/${req.body.userId}/${file.filename}`
    );
    values = [req.body.userId, null, coverPhotoURI[0]];
  }
  executeStoredProcedure("sp_set_userImages", [values]).then((result) => {
    if (result["0"]["output"] < 0) {
      res.json(result);
    } else {
      try {
        res.json({
          ...result["0"],
          jsonResponse: JSON.parse(result["0"].jsonResponse),
          status: 200,
        });
      } catch (error) {
        res.send(error);
      }
    }
  });
};

module.exports = setUserCoverImage;

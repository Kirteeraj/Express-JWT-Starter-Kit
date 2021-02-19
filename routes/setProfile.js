const router = require("express").Router();
const verify = require("../middlewares/verifyToken");
const multer = require("multer");
const mongoose = require("mongoose");
const { profileValidation } = require("../validators/setProfileValidator");
const upload = multer({
  dest: "./uploads/images",
});
const Profile = require("../model/Profile");

router.post("/setprofile", verify, upload.single("image"), async (req, res) => {
  //valdiation
  const { error } = profileValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //creater new profile
  const profile = new Profile({
    userId: mongoose.Types.ObjectId(req.user.userID),
    imageUrl: "TODO",
    intro: req.body.intro,
    place: req.body.place,
    waNumber: req.body.waNumber,
    wakeUpNumber: req.body.wakeUpNumber,
    scrrible: req.body.scrrible,
  });
  try {
    const savedProfile = await profile.save();
    res.status(200).send(savedProfile);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;

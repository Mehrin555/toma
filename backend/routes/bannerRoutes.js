const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");

const {
  createBanner,
  getBanner,
  updateBanner,
  deleteBanner,
} = require("../controllers/bannerController");

router.post("/", upload.single("image"), createBanner);
router.get("/", getBanner);
router.put("/:id", upload.single("image"), updateBanner);
router.delete("/:id", deleteBanner);

module.exports = router;

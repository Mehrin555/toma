const express = require("express");
const router = express.Router();
const cloudinary = require("../config/cloudinary");
const upload = require("../middlewares/upload");
const Navbar = require("../models/navModel");

// Upload logo
router.post("/logo", upload.single("logo"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    // always update latest navbar
    let navbar = await Navbar.findOne().sort({ _id: -1 });

    if (navbar) {
      navbar.logo = result.secure_url;
      await navbar.save();
    } else {
      navbar = await Navbar.create({ logo: result.secure_url });
    }

    res.json(navbar);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get navbar
router.get("/", async (req, res) => {
  const navbar = await Navbar.findOne().sort({ _id: -1 });
  res.json(navbar);
});

module.exports = router;

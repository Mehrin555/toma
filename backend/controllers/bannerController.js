const Banner = require("../models/bannerModel");
const cloudinary = require("../config/cloudinary");

// 🟢 CREATE
exports.createBanner = async (req, res) => {
  try {
    console.log("BODY:", req.body);
console.log("FILE:", req.file);
    const { heading, paragraph, buttonText } = req.body;

    let imageUrl = "";

    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
        { folder: "portfolio/banner" }
      );
      imageUrl = uploadResult.secure_url;
    }

    const banner = new Banner({
      heading,
      paragraph,
      buttonText,
      image: imageUrl,
    });

    await banner.save();

    res.status(201).json(banner);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Banner create failed" });
  }
};

// 🟡 GET
exports.getBanner = async (req, res) => {
  const banner = await Banner.findOne().sort({ _id: -1 });
  res.json(banner);
};

// 🔵 UPDATE
exports.updateBanner = async (req, res) => {
  try {
    let updateData = req.body;

    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
        { folder: "portfolio/banner" }
      );
      updateData.image = uploadResult.secure_url;
    }

    const banner = await Banner.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(banner);
  } catch (err) {
    res.status(500).json({ message: "Banner update failed" });
  }
};

// 🔴 DELETE
exports.deleteBanner = async (req, res) => {
  await Banner.findByIdAndDelete(req.params.id);
  res.json({ message: "Banner deleted" });
};

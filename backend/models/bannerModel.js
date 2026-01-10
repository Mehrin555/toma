const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  paragraph: { type: String, required: true },
  buttonText: { type: String, required: true },
  image: { type: String }, // 👈 Cloudinary URL
});

module.exports = mongoose.model("Banner", bannerSchema);

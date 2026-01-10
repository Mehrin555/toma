const mongoose = require("mongoose");

const navSchema = new mongoose.Schema({
  logo: String,
});

module.exports = mongoose.model("Navbar", navSchema);

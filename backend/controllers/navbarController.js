const Navbar = require("../models/navModel");

exports.createNavbar = async (req, res) => {
  try {
    const data = new Navbar(req.body);
    await data.save();
    res.status(201).json({ message: "Menu created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getNavbar = async (req, res) => {
  try {
    const data = await Navbar.findOne();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

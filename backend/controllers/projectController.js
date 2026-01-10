const Project = require("../models/projectModel");
const cloudinary = require("../config/cloudinary");

// 🟢 CREATE PROJECT
exports.createProject = async (req, res) => {
  try {
    const { title, liveUrl } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image required" });
    }

    const uploadResult = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
      { folder: "portfolio/projects" }
    );

    const project = await Project.create({
      title,
      liveUrl,
      image: uploadResult.secure_url,
    });

    res.status(201).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Project create failed" });
  }
};

// 🟡 GET ALL PROJECTS
exports.getProjects = async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
};

// 🔴 DELETE PROJECT
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Not found" });

    // Cloudinary image delete
    const publicId = project.image
      .split("/")
      .pop()
      .split(".")[0];

    await cloudinary.uploader.destroy(
      `portfolio/projects/${publicId}`
    );

    await project.deleteOne();
    res.json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
};

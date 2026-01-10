// 🔴 dotenv MUST be first
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const express = require("express");
const cors = require("cors");

const dbConnection = require("./database/dbConnection");

const navbarRoutes = require("./routes/navbarRoutes");
const bannerRoutes = require("./routes/bannerRoutes");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// DB connect AFTER dotenv
dbConnection();

// Routes
app.use("/api/navbar", navbarRoutes);
app.use("/api/banner", bannerRoutes);
app.use("/api/projects", projectRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

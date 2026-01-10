import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardPortfolio = () => {
  const [projects, setProjects] = useState([]);

  const [title, setTitle] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  // Load projects
  const loadProjects = async () => {
    const res = await axios.get("http://localhost:3000/api/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  // Submit project
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("liveUrl", liveUrl);
    formData.append("image", image);

    await axios.post("http://localhost:3000/api/projects", formData);

    setTitle("");
    setLiveUrl("");
    setImage(null);
    setPreview("");

    loadProjects();
  };

  // Delete project
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/api/projects/${id}`);
    loadProjects();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Portfolio Dashboard
        </h2>

        {/* Add Project */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">
            Add New Project
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              placeholder="Project Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <input
              type="url"
              placeholder="Live Project URL"
              value={liveUrl}
              onChange={(e) => setLiveUrl(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setImage(e.target.files[0]);
                setPreview(URL.createObjectURL(e.target.files[0]));
              }}
              className="w-full text-gray-700"
              required
            />

            {preview && (
              <img
                src={preview}
                alt="preview"
                className="w-full h-48 object-cover rounded-md border"
              />
            )}

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition"
            >
              Add Project
            </button>
          </form>
        </div>

        {/* Project List */}
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          All Projects
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-44 w-full object-cover"
              />

              <div className="p-4">
                <h4 className="font-semibold text-gray-800">
                  {p.title}
                </h4>

                <div className="flex justify-between items-center mt-4">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-500 font-medium text-sm"
                  >
                    View Live
                  </a>

                  <button
                    onClick={() => handleDelete(p._id)}
                    className="text-red-500 font-medium text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No projects added yet
          </p>
        )}

      </div>
    </div>
  );
};

export default DashboardPortfolio;

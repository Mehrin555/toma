import React, { useEffect, useState } from "react";
import axios from "axios";

const Portfolio2 = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/projects");
        console.log("PROJECTS RESPONSE 👉", res.data); // 🔥 DEBUG
        setProjects(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("❌ Portfolio API Error:", err);
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // 🔄 Loading state
  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center text-gray-500">
        Loading projects...
      </section>
    );
  }

  // ❌ Error state
  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-[1144px] mx-auto px-4">
        {/* Empty State */}
        {projects.length === 0 && (
          <p className="text-center text-gray-400 mt-20">
            No projects found
          </p>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <a
              key={project._id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold border border-white px-6 py-2 rounded-full">
                  View Project
                </span>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur px-4 py-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio2;

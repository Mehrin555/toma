import React, { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {
  const [banner, setBanner] = useState({
    heading: "",
    paragraph: "",
    buttonText: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/api/banner").then((res) => {
      if (res.data) {
        setBanner(res.data);
        setPreview(res.data.image);
        setId(res.data._id);
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("heading", banner.heading);
    formData.append("paragraph", banner.paragraph);
    formData.append("buttonText", banner.buttonText);
    if (image) formData.append("image", image);

    try {
      if (id) {
        await axios.put(`http://localhost:3000/api/banner/${id}`, formData);
        alert("✅ Banner Updated Successfully");
      } else {
        await axios.post("http://localhost:3000/api/banner", formData);
        alert("✅ Banner Created Successfully");
      }
    } catch (err) {
      alert("❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-pink-100 to-rose-100 p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">

        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
          🎨 Manage Banner
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Heading */}
          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Banner Heading
            </label>
            <input
              type="text"
              placeholder="Enter banner heading"
              value={banner.heading}
              onChange={(e) =>
                setBanner({ ...banner, heading: e.target.value })
              }
              className="w-full border text-black border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>

          {/* Paragraph */}
          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Banner Paragraph
            </label>
            <textarea
              rows="4"
              placeholder="Write banner description"
              value={banner.paragraph}
              onChange={(e) =>
                setBanner({ ...banner, paragraph: e.target.value })
              }
              className="w-full border text-black border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>

          {/* Button Text */}
          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Button Text
            </label>
            <input
              type="text"
              placeholder="e.g. Get Started"
              value={banner.buttonText}
              onChange={(e) =>
                setBanner({ ...banner, buttonText: e.target.value })
              }
              className="w-full border text-black border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block mb-2 text-gray-600 font-medium">
              Banner Image
            </label>

            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-48 object-cover rounded-xl mb-3 border"
              />
            )}

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setImage(e.target.files[0]);
                setPreview(URL.createObjectURL(e.target.files[0]));
              }}
              className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-orange-50 file:text-orange-600
              hover:file:bg-orange-100"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition"
          >
            {loading ? "Saving..." : id ? "Update Banner" : "Create Banner"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;

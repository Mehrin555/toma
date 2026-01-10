import React, { useEffect, useState } from "react";
import axios from "axios";

const NavbarLogo = () => {
  const [logo, setLogo] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/api/navbar")
      .then(res => {
        if (res.data?.logo) {
          setPreview(res.data.logo);
        }
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!logo) return alert("Please select a logo");

    const formData = new FormData();
    formData.append("logo", logo);

    const res = await axios.post(
      "http://localhost:3000/api/navbar/logo",
      formData
    );

    setPreview(res.data.logo);
    alert("✅ Logo uploaded successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-[350px]"
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          Upload Navbar Logo
        </h2>

        {preview && (
          <img
            src={preview}
            alt="Logo"
            className="h-16 mx-auto mb-4"
          />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setLogo(e.target.files[0])}
          className="mb-4"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded"
        >
          Upload Logo
        </button>
      </form>
    </div>
  );
};

export default NavbarLogo;

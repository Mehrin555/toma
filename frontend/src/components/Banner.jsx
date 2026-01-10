import React, { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/banner");
        setBanner(res.data);
      } catch (err) {
        console.error("❌ Error loading banner:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, []);

  // loading state
  if (loading) {
    return (
      <section className="min-h-screen flex justify-center items-center text-gray-500">
        Loading Banner...
      </section>
    );
  }

  // no banner found
  if (!banner) {
    return (
      <section className="min-h-screen flex justify-center items-center text-gray-400">
        No Banner Available
      </section>
    );
  }

  return (
    <section className="bg-[rgba(255,195,152,0.2)] min-h-screen flex items-center">
      <div className="container mx-auto max-w-[1144px] flex justify-between items-center">

        {/* Text Content */}
        <div>
          <p className="text-base font-[jost] tracking-wide text-gray-700">
            I AM DESIGNER
          </p>

          <h1 className="text-6xl font-semibold font-[jost] mt-3 leading-tight">
            {banner.heading}
          </h1>

          <p className="text-lg text-[#606060] mt-6 max-w-[520px]">
            {banner.paragraph}
          </p>

          <button className="text-white bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md mt-8 transition">
            {banner.buttonText}
          </button>
        </div>

        {/* Image */}
        {banner.image && (
  <img
    src={banner.image}
    alt="Banner"
    className="w-[500px] h-auto object-cover hidden md:block"
  />
)}

      </div>
    </section>
  );
};

export default Banner;

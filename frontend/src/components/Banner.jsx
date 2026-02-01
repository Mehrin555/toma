import React, { useEffect, useState } from "react";
import axios from "axios";

// Icons from assets
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import gmailIcon from "../assets/gmail.png";

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

  // Loading state
  if (loading) {
    return (
      <section className="min-h-screen flex justify-center items-center text-gray-500">
        Loading Banner...
      </section>
    );
  }

  // No banner found
  if (!banner) {
    return (
      <section className="min-h-screen flex justify-center items-center text-gray-400">
        No Banner Available
      </section>
    );
  }

  return (
    <section className="bg-[rgba(255,195,152,0.2)] min-h-screen flex items-center">
      <div className="container mx-auto max-w-[1144px] flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Text Content */}
        <div className="text-center md:text-left">
          <p className="text-base font-[jost] tracking-wide text-gray-700">
            I AM DESIGNER
          </p>

          <h1 className="text-6xl font-semibold font-[jost] mt-3 leading-tight">
            {banner.heading}
          </h1>

          <p className="text-lg text-[#606060] mt-6 max-w-[520px] mx-auto md:mx-0">
            {banner.paragraph}
          </p>

          <button className="text-white bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md mt-8 transition">
            {banner.buttonText}
          </button>

          {/* Social Icons */}
          <div className="social-icons flex justify-center md:justify-start gap-6 mt-6">
            {/* GitHub */}
            <a
              href="https://github.com/Mehrin555"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" className="icon w-10 h-10" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/YourLinkedInProfile/" // ← Replace with your LinkedIn
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="icon w-10 h-10" />
            </a>

            {/* Gmail */}
            <a href="mailto:mehrintoma28@gmail.com">
              <img src={gmailIcon} alt="Gmail" className="icon w-10 h-10" />
            </a>
          </div>
        </div>

        {/* Banner Image */}
        {banner.image && (
          <img
            src={banner.image}
            alt="Banner"
            className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover"
          />
        )}
      </div>
    </section>
  );
};

export default Banner;

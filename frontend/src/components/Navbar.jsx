import React, { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [navbar, setNavbar] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/navbar")
      .then((res) => setNavbar(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <nav className="pt-7 pb-7 bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="container w-[1144px] mx-auto flex justify-between items-center">

        {/* Logo */}
        <img src={navbar?.logo} alt="Logo" className="h-10" />

        {/* Menu */}
        <ul className="flex items-center gap-8">
          <li><a href="#home" className="hover:text-orange-500">Home</a></li>
          <li><a href="#about" className="hover:text-orange-500">About</a></li>
          <li><a href="#service" className="hover:text-orange-500">Service</a></li>
          <li><a href="#portfolio" className="hover:text-orange-500">Portfolio</a></li>
        </ul>

        {/* Button */}
        {navbar?.showButton && (
          <a
            href="#contact"
            className="py-3 px-6 rounded-md bg-orange-500 hover:bg-orange-600 transition text-white font-semibold"
          >
            {navbar?.buttonText || "Contact Us"}
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

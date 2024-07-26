import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm bg-opacity-50" : ""
      }`}
    >
      <nav>
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            <img className="min-h-[45px] h-[45px]" src={logo} alt="logo" />
          </div>
          <div className="hidden sm:flex items-center text-lg">
            <ul className="flex sm:gap-10 text-case">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-3">
            <button className="outline-none hover:outline-lime text-white py-2 px-4 rounded-full">
              Get Started
            </button>
            <button className="text-lightblack bg-lime py-2 px-4 rounded-full">
              Login
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

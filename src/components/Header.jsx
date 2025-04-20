import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/Agro.png";

const MotionLink = motion(Link);

const Header = () => {
  const [isTranslateReady, setIsTranslateReady] = useState(false);

  return (
    <>
      <div className="h-3 bg-white"></div>
      <header className="bg-blue-800 shadow-md border-b border-blue-600 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2 group">
            <img
              src={Logo}
              alt="Agro Logo"
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-orange-400 transition-colors">
              Agro
            </span>
          </Link>

          {/* Navigation + Language Dropdown */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            {/* Navigation Links */}
            <nav className="flex items-center gap-8">
              {["Home", "About Us", "Contact Us"].map((label) => {
                const path =
                  label === "Home"
                    ? "/home"
                    : label === "About Us"
                    ? "/about"
                    : "/contact";
                return (
                  <div key={label} className="relative group">
                    <MotionLink
                      to={path}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="text-white hover:text-orange-400 font-semibold text-lg md:text-xl transition-colors"
                    >
                      {label}
                    </MotionLink>
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-orange-400 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-200" />
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

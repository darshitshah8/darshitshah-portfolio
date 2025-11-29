import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <nav
      className="w-full bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 px-4 py-3 fixed top-0 left-0 z-50 shadow-md transition-colors duration-300"
      role="navigation"
      aria-label="main navigation"
    >
      {/* Top Row */}
      <div className="flex justify-between items-center">
        {/* Brand */}
        <NavLink className="text-2xl font-bold" to="/">
          Darshit<span className="text-orange-500 dark:text-orange-400">.</span>
        </NavLink>

        {/* Burger (mobile only) */}
        <button
          type="button"
          aria-label="menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-between w-6 h-5"
        >
          <span className="block h-0.5 bg-current"></span>
          <span className="block h-0.5 bg-current"></span>
          <span className="block h-0.5 bg-current"></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `hover:text-orange-500 dark:hover:text-orange-400 transition ${
                  isActive
                    ? "text-orange-500 dark:text-orange-400 font-semibold"
                    : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <ThemeToggle className="ml-2" />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center md:hidden transition-all duration-300">
          <div className=" rounded-xl shadow-xl w-4/5 max-w-xs py-6 flex flex-col gap-5 text-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `hover:text-orange-500 dark:hover:text-orange-400 transition text-lg ${
                    isActive
                      ? "text-orange-500 dark:text-orange-400 font-semibold"
                      : "text-white dark:text-gray-100"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Theme Toggle in Mobile Menu */}
            <div className="mt-4 flex justify-center">
              <ThemeToggle />
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 text-3xl text-gray-800 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

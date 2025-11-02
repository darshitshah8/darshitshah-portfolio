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
      className="w-full bg-light text-dark px-4 py-3"
      role="navigation"
      aria-label="main navigation"
    >
      {/* Top Row */}
      <div className="flex justify-between items-center">
        {/* Brand */}
        <NavLink className="text-2xl font-bold" to="/">
          Darshit<span className="text-blue-400">.</span>
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
                `hover:text-blue-500 transition ${
                  isActive ? "text-blue-500 font-semibold" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* <ThemeToggle /> */}
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-lg flex flex-col items-center justify-center md:hidden">
          <div className="bg-light rounded-xl shadow-lg w-4/5 max-w-xs py-6 flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `hover:text-blue-500 transition text-lg ${
                    isActive ? "text-blue-500 font-semibold" : "text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 text-3xl text-white rounded-lg hover:text-blue-500"
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
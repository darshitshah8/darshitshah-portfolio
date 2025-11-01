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

    return (
        <nav
            className="navbar is-spaced bg-light text-dark"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <NavLink
                    className="navbar-item has-text-weight-bold is-size-4 text-dark"
                    to="/"
                >
                    Darshit<span className="text-warning">.</span>
                </NavLink>

                {/* Burger button for mobile */}
                <button
                    className={`navbar-burger ${isMenuOpen ? "is-active" : ""}`}
                    aria-label="menu"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div className={`navbar-menu bg-light ${isMenuOpen ? "is-active" : ""}`}>
                <div className="navbar-start">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `navbar-item ${
                                    isActive
                                        ? "text-primary has-text-weight-semibold"
                                        : "text-dark"
                                }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="navbar-end is-align-items-center">
                    <div className="navbar-item">
                        <ThemeToggle />
                    </div>

                    <div className="navbar-item">
                        <a
                            href="https://github.com/darshitshah8"
                            target="_blank"
                            className="icon text-dark link-dark-hover"
                            aria-label="GitHub"
                            title="GitHub"
                        >
                            {/* GitHub SVG - inherits currentColor */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.95 3.2 9.14 7.64 10.62.56.1.76-.24.76-.54 0-.27-.01-1-.02-1.96-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.4.11-2.92 0 0 .95-.3 3.11 1.16.9-.25 1.86-.37 2.82-.37.96 0 1.92.12 2.82.37 2.16-1.46 3.11-1.16 3.11-1.16.61 1.52.23 2.64.11 2.92.72.78 1.16 1.78 1.16 3 0 4.28-2.62 5.23-5.11 5.5.4.35.76 1.05.76 2.11 0 1.52-.01 2.75-.01 3.12 0 .3.2.65.77.54C19.06 20.89 22.25 16.7 22.25 11.75 22.25 5.48 17.27.5 12 .5z"/>
                            </svg>
                        </a>
                    </div>

                    <div className="navbar-item">
                        <a
                            href="https://www.linkedin.com/in/darshitshah8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon text-dark link-dark-hover"
                            aria-label="LinkedIn"
                            title="LinkedIn"
                        >
                            {/* LinkedIn SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.36 8h4.28V24H.36V8zM8.84 8h4.1v2.2h.06c.57-1.08 1.97-2.2 4.06-2.2 4.34 0 5.14 2.86 5.14 6.57V24h-4.28v-7.1c0-1.69-.03-3.86-2.35-3.86-2.36 0-2.72 1.84-2.72 3.73V24H8.84V8z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

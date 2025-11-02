import { useEffect, useState } from "react";

/**
 * ThemeToggle
 * - toggles `dark` class on document.documentElement
 * - persists to localStorage
 * - SSR-safe with error handling
 */
const ThemeToggle = ({ className = "" }) => {
  const [theme, setTheme] = useState("light"); // "light" | "dark"
  const KEY = "theme-preference";

  // Init theme on mount (SSR safe)
  useEffect(() => {
    try {
      const saved = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
      if (saved === "dark") {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      }
    } catch (err) {
      // localStorage or document might be unavailable — fail gracefully
      console.warn("Something went wrong:", err);
      setTheme("light");
    }
  }, []);

  const toggle = () => {
    try {
      const next = theme === "dark" ? "light" : "dark";
      if (next === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem(KEY, next);
      setTheme(next);
    } catch (err) {
      console.warn("Theme toggle failed:", err);
      // fallback: keep state in-memory
      setTheme((t) => (t === "dark" ? "light" : "dark"));
    }
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className={`${className}`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;

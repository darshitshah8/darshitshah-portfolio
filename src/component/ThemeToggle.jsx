import { useEffect, useState } from "react";

/**
 * ThemeToggle
 * - Detects system preference on first load
 * - Allows manual toggle
 * - Persists preference to localStorage
 * - SSR-safe with error handling
 */
const ThemeToggle = ({ className = "" }) => {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const KEY = "theme-preference";

  // Init theme on mount: check saved pref, then system pref
  useEffect(() => {
    try {
      const saved = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
      let resolvedTheme = saved || "system";

      // If system, detect from prefers-color-scheme
      if (resolvedTheme === "system") {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        resolvedTheme = prefersDark ? "dark" : "light";
      }

      if (resolvedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      setTheme(resolvedTheme);
      setMounted(true);
    } catch (err) {
      console.warn("Theme initialization failed:", err);
      setTheme("light");
      setMounted(true);
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
      setTheme((t) => (t === "dark" ? "light" : "dark"));
    }
  };

  if (!mounted) {
    return (
      <div
        className={`w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}
        aria-hidden
      />
    );
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200 ${className}`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800 dark:text-gray-200">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;

import { useEffect, useState } from "react";

/**
 * Custom hook to calculate experience from a given start date.
 * @param {Date} startDate - Starting date of experience (e.g., new Date(2023, 1, 1))
 * @returns {string} Formatted experience string like "2.5+ years"
 */
export function useExperience(startDate = new Date(2023, 1, 1)) {
  const [experience, setExperience] = useState("");

  useEffect(() => {
    try {
      const now = new Date();
      const diffMonths =
        (now.getFullYear() - startDate.getFullYear()) * 12 +
        (now.getMonth() - startDate.getMonth());

      if (diffMonths < 0) return setExperience("0 years");

      const years = Math.floor(diffMonths / 12);
      const months = diffMonths % 12;
      const total = years + months / 12;
      const rounded = Math.round(total * 10) / 10;

      // smart formatting
      if (months === 0) setExperience(`${years} year${years > 1 ? "s" : ""}`);
      else if (months >= 5 && months <= 7) setExperience(`${years}.5+ years`);
      else if (months < 5) setExperience(`${years}.5 years`);
      else setExperience(`${rounded}+ years`);
    } catch (error) {
      console.error("Error calculating experience:", error);
      setExperience("N/A");
    }
  }, [startDate]);

  return experience;
}

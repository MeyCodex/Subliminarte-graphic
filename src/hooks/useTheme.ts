import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("subliminarte-theme") as Theme;
    return storedTheme || "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    theme === "light"
      ? root.classList.add("light")
      : root.classList.remove("light");
    localStorage.setItem("subliminarte-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};

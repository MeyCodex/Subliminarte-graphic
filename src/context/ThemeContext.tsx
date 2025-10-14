import React, { createContext, useContext, type ReactNode } from "react";
import { useTheme } from "@hooks/useTheme";

type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themeProps = useTheme();

  return (
    <ThemeContext.Provider value={themeProps}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Debe usarse dentro de ThemeProvider");
  }

  return context;
};

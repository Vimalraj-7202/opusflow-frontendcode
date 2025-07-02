"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import theme from "./theme";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  mode: ThemeMode;
  colors: typeof theme.light.colors;
  fontSize: typeof theme.light.fontSize;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const colors = theme[mode].colors;
  const fontSize = theme[mode].fontSize;

  return (
    <ThemeContext.Provider value={{ mode, colors, fontSize, toggleTheme }}>
      <div
        style={{
          "--background": colors.background,
          "--text": colors.text,
          "--primary": colors.primary,
          "--secondary": colors.secondary,
          "--tertiary": colors.tertiary,
          "--font-size": fontSize.base,
        } as React.CSSProperties}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

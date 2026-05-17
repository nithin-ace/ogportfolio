"use client";

import * as React from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme] = React.useState<Theme>("light");

  React.useEffect(() => {
    // Force light mode on mount
    document.documentElement.classList.remove("dark");
  }, []);

  const setTheme = () => {
    // No-op to satisfy the context signature
  };

  return (
    <ThemeContext.Provider value={{ theme: "light", setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

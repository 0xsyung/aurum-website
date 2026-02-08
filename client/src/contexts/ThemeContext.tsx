// Theme context for toggling light/dark mode and syncing with localStorage.
import React, { createContext, useContext, useEffect, useState } from "react";

// Allowed theme values used throughout the app.
type Theme = "light" | "dark";

// Shape of the context value shared across the tree.
interface ThemeContextType {
  theme: Theme;
  toggleTheme?: () => void;
  switchable: boolean;
}

// Start with undefined to force consumers to be wrapped in a provider.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider props allow choosing default theme and enabling toggling.
interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  switchable?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  switchable = false,
}: ThemeProviderProps) {
  // Initialize theme from localStorage only when toggling is enabled.
  const [theme, setTheme] = useState<Theme>(() => {
    if (switchable) {
      const stored = localStorage.getItem("theme");
      return (stored as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    // Apply theme class to the root element to drive CSS variables.
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Persist user choice when switching is enabled.
    if (switchable) {
      localStorage.setItem("theme", theme);
    }
  }, [theme, switchable]);

  // Only expose a toggle when switchable is enabled.
  const toggleTheme = switchable
    ? () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
      }
    : undefined;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, switchable }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  // Consumer hook that enforces usage under ThemeProvider.
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

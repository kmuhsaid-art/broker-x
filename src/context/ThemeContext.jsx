import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export const ThemeContext = createContext(null);

const STORAGE_KEY = "brokerx_theme";

export default function ThemeProvider({ children }) {
  const getInitialTheme = () => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved === "light" || saved === "dark") {
      return saved;
    }

    return window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);

    document.documentElement.classList.remove(
      "light",
      "dark"
    );

    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleChange = (event) => {
      const saved =
        localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        setTheme(
          event.matches ? "dark" : "light"
        );
      }
    };

    media.addEventListener(
      "change",
      handleChange
    );

    return () =>
      media.removeEventListener(
        "change",
        handleChange
      );
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) =>
      prev === "dark"
        ? "light"
        : "dark"
    );
  }, []);

  const setDark = useCallback(() => {
    setTheme("dark");
  }, []);

  const setLight = useCallback(() => {
    setTheme("light");
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      setDark,
      setLight,
      isDark: theme === "dark",
    }),
    [theme, toggleTheme, setDark, setLight]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
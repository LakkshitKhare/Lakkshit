import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type Theme = 'light' | 'dark';
interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const storageKey = 'lakkshit-theme';
const ThemeContext = createContext<ThemeContextValue | null>(null);

function readSavedTheme(): Theme | null {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved === 'light' || saved === 'dark' ? saved : null;
  } catch {
    return null;
  }
}

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getInitialTheme(): Theme {
  const initial = document.documentElement.dataset.theme;
  return initial === 'light' || initial === 'dark' ? initial : readSavedTheme() ?? getSystemTheme();
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const hasUserPreference = useRef(readSavedTheme() !== null);

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#efeee9');
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    const frame = requestAnimationFrame(() => root.classList.add('theme-ready'));
    const preference = window.matchMedia('(prefers-color-scheme: dark)');

    const onSystemChange = (event: MediaQueryListEvent) => {
      if (!hasUserPreference.current) setTheme(event.matches ? 'dark' : 'light');
    };
    const onStorageChange = (event: StorageEvent) => {
      if (event.key !== storageKey && event.key !== null) return;
      const saved = readSavedTheme();
      hasUserPreference.current = saved !== null;
      setTheme(saved ?? getSystemTheme());
    };

    preference.addEventListener('change', onSystemChange);
    window.addEventListener('storage', onStorageChange);
    return () => {
      cancelAnimationFrame(frame);
      root.classList.remove('theme-ready');
      preference.removeEventListener('change', onSystemChange);
      window.removeEventListener('storage', onStorageChange);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    hasUserPreference.current = true;
    setTheme(nextTheme);
    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch {
      // Keep the toggle usable even when browser storage is restricted.
    }
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider.');
  return context;
}
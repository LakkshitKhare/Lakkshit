import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={label} title={label}>
      {theme === 'dark'
        ? <Sun size={19} strokeWidth={1.4} aria-hidden="true" />
        : <Moon size={19} strokeWidth={1.4} aria-hidden="true" />}
    </button>
  );
}
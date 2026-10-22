import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const darkMode = theme === "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
      aria-pressed={darkMode}
      title={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
      onClick={() => toggleTheme?.()}
    >
      {darkMode ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
    </button>
  );
}

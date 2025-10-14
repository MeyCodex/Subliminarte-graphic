import { useThemeContext } from "@/context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

type Props = { onToggleComplete?: () => void };

function ThemeToggle({ onToggleComplete }: Props) {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === "dark";

  const handleToggle = () => {
    toggleTheme();
    onToggleComplete && onToggleComplete();
  };
  return (
    <button
      onClick={handleToggle}
      aria-label={`Activar modo ${isDark ? "claro" : "oscuro"}`}
      className="p-2 rounded-full text-foreground hover:text-accent transition duration-300"
    >
      {isDark ? <FiSun className="w-6 h-6" /> : <FiMoon className="w-6 h-6" />}
    </button>
  );
}

export default ThemeToggle;

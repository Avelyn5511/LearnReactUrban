import { useEffect, useState } from "react";
import style from "./style.module.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Устанавливаем начальную тему при загрузке компонента
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <button onClick={toggleTheme} className={style.buttonStyle}>
      Dark/Green - {theme === "light" ? "switch dark" : "switch green"}
    </button>
  );
};

export default ThemeToggle;

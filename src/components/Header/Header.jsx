import React from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./Header.module.css";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleToggle = () => {
    toggleDarkMode();
  };
  const handleClick = (e) => {
    onFilterChange(e.target.innerHTML);
  };

  return (
    <header className={styles.header}>
      <button onClick={handleToggle} className={styles.toggle}>
        {darkMode ? <BsSunFill /> : <BsMoonFill />}
      </button>
      <ul className={styles.filters}>
        {filters.map((filter) => (
          <li key={filter}>
            <button onClick={handleClick} className={styles.filter}>
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

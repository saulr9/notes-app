import { useContext } from "react";
import { ThemeContext } from "../../context/Notes/ThemeProvider";
import reactLogo from "../../assets/react.svg";
import styles from "./Header.module.css";

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useContext(ThemeContext);
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <a
          href="https://reactjs.org"
          target="_blank"
          className={styles.header__logo}
        >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <label className={styles.header__theme_switch}>
          <input
            type="checkbox"
            className={`nes-checkbox  ${isDarkTheme ? "is-dark" : ""}`}
            checked={isDarkTheme && "checked"}
            onChange={() => setIsDarkTheme((prevState) => !prevState)}
          />
          <span>Dark Mode</span>
        </label>
      </div>
    </header>
  );
};

export default Header;

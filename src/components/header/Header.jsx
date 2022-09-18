import reactLogo from "../../assets/react.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <a
        href="https://reactjs.org"
        target="_blank"
        className={styles.header__logo}
      >
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </header>
  );
};

export default Header;

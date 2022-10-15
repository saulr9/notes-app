import { useContext } from "react";
import ReactDOM from "react-dom";
import { ThemeContext } from "../../../context/Notes/ThemeProvider";
import styles from "./index.module.css";

const modalContainer = document.querySelector("#modalPortal");

const Modal = ({ title, children, isOpened, closeModal }) => {
  const [isDarkTheme] = useContext(ThemeContext);
  return (
    isOpened &&
    ReactDOM.createPortal(
      <div className={styles.modal__overlay}>
        <div
          className={`${styles.modal} ${
            isDarkTheme ? "nes-dialog is-dark" : ""
          }`}
        >
          <div className={styles.modal__header}>
            <div className="modal__title">{title}</div>
            <button
              type="button"
              className={`${styles.modal__close} ${
                isDarkTheme ? "is-dark" : ""
              }`}
              onClick={closeModal}
            >
              X
            </button>
          </div>
          <div className={styles.modal__body}>{children}</div>
        </div>
      </div>,
      modalContainer
    )
  );
};

export default Modal;

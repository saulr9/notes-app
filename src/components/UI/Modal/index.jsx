import ReactDOM from "react-dom";
import styles from "./index.module.css";

const modalContainer = document.querySelector("#modalPortal");

const Modal = ({ title, children, isOpened, closeModal }) => {
  return (
    isOpened &&
    ReactDOM.createPortal(
      <div className={styles.modal__overlay}>
        <div className={`${styles.modal}`}>
          <div className={styles.modal__header}>
            <div className="modal__title">{title}</div>
            <button
              type="button"
              className={styles.modal__close}
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

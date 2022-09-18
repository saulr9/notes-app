import React from "react";
import useModal from "../../../hooks/useModal";
import Modal from "../../UI/Modal";
import NoteForm from "../Note/Form";

import styles from "./index.module.css";

const NotesHeader = ({ onSaveNote }) => {
  const { isOpened, handleModalOpen, handleModalClose } = useModal();
  return (
    <div className={styles.notes__header}>
      <h1>My Notes</h1>
      <button type="button" className="nes-btn" onClick={handleModalOpen}>
        Create
      </button>
      <Modal
        title="Create Note"
        isOpened={isOpened}
        closeModal={handleModalClose}
      >
        <NoteForm onSaveNote={onSaveNote} closeModal={handleModalClose} />
      </Modal>
    </div>
  );
};

export default NotesHeader;

import useModal from "../../../../hooks/useModal";
import useNotes from "../../../../hooks/useNotes";
import Modal from "../../../UI/Modal";
import NoteForm from "../Form";

import styles from "./index.module.css";

const NoteActions = ({ note }) => {
  const { isOpened, handleModalClose, handleModalOpen } = useModal();
  const { handleDelete, handleEditNote, handleStatus } = useNotes();
  const { title, id } = note;
  return (
    <>
      <div className={styles.note__actions}>
        <button
          type="button"
          className={`nes-btn ${note.isDone ? "is-warning" : "is-success"}`}
          onClick={() => handleStatus(note.id)}
        >
          {note.isDone ? "To Do" : "Done"}
        </button>

        <button
          type="button"
          onClick={handleModalOpen}
          className="nes-btn is-primary"
        >
          Edit
        </button>
        <button
          type="button"
          className="nes-btn is-error"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
      <Modal
        title={`Editing "${title}"`}
        isOpened={isOpened}
        closeModal={handleModalClose}
      >
        <NoteForm
          note={note}
          onSaveNote={handleEditNote}
          closeModal={handleModalClose}
        />
      </Modal>
    </>
  );
};

export default NoteActions;

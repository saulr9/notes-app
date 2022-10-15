import { useContext } from "react";
import { ThemeContext } from "../../../../context/Notes/ThemeProvider";
import useForm from "../../../../hooks/useForm";
import styles from "./index.module.css";
const NoteForm = ({ note, onSaveNote, closeModal }) => {
  const [isDarkTheme] = useContext(ThemeContext);
  // handle save useNotes
  const newNoteID = new Date().valueOf();
  const initialState = {
    id: note ? note.id : newNoteID,
    title: note ? note.title : "",
    description: note ? note.description : "",
    isDone: false,
    isPinned: false,
  };
  const { values, handleInputChange } = useForm(initialState);
  const { title, description } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length === 0 || description.length === 0) return;
    onSaveNote(values);
    closeModal && closeModal();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="hidden" name="id" value={note ? note.id : newNoteID} />
      <div className="nes-field">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          className={`nes-input ${isDarkTheme ? "is-dark" : ""}`}
          name="title"
          onChange={handleInputChange}
          value={title}
        />
      </div>
      <div className="nes-field">
        <label htmlFor="description">Description</label>
        <textarea
          className={`nes-textarea ${isDarkTheme ? "is-dark" : ""}`}
          id="description"
          name="description"
          onChange={handleInputChange}
          value={description}
          rows={6}
        />
      </div>
      <button
        type="submit"
        value="submit"
        className={`${styles.form__button} ${
          title.length === 0 || description.length === 0
            ? "is-disabled"
            : "is-success"
        } nes-btn`}
      >
        Save
      </button>
    </form>
  );
};

export default NoteForm;

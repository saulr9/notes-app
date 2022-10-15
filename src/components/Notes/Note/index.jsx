import { useContext } from "react";
import { ThemeContext } from "../../../context/Notes/ThemeProvider";
import ReadMore from "../../UI/ReadMore";
import NoteActions from "./Actions";
import NoteFavorite from "./Favorite";

import styles from "./index.module.css";

const Note = ({ note }) => {
  const { title, createdAt, lastUpdate, description } = note;
  const [isDarkTheme] = useContext(ThemeContext);

  return (
    <div
      className={`nes-container with-title ${styles.note} ${
        isDarkTheme ? "is-dark" : ""
      }`}
      data-testid="note"
    >
      <p className="title">{title}</p>
      <div className={styles.note__content}>
        <div className={styles.note__description}>
          {/*           <div className={styles.note__date}>
            <small>created at: {createdAt}</small>
            <small>last update: {lastUpdate}</small>
          </div> */}
          <ReadMore text={description} length={100} />
        </div>
        <div className={styles.note__info}>
          <NoteFavorite note={note} />
          {note.isDone && <i className="nes-icon trophy is-small"></i>}
        </div>
      </div>
      <NoteActions note={note} />
    </div>
  );
};
export default Note;

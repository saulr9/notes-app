import { useCallback } from "react";
import useNotes from "../../hooks/useNotes";
import Note from "./Note/index";

const NotesList = (/* {
  notes,
  onSaveNote,
  onEditNote,
  onClickDelete,
  onClickFav,
  handleStatus,
} */) => {
  const { notes } = useNotes();
  const sortFunction = useCallback(
    (a, b) => a.isDone - b.isDone || b.isPinned - a.isPinned,
    [notes]
  );

  if (notes.length === 0) return "There is no notes...Start creating your first note";

  return notes
    .sort(sortFunction)
    .map((note) => <Note key={note.id} note={note} />);
};
export default NotesList;

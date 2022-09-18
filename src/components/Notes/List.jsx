import { useCallback } from "react";
import Note from "./Note/index";

const NotesList = ({
  notes,
  onSaveNote,
  onEditNote,
  onClickDelete,
  onClickFav,
  handleStatus,
}) => {
  const sortFunction = useCallback(
    (a, b) => a.isDone - b.isDone || b.isPinned - a.isPinned,
    [notes]
  );

  if (notes.length === 0) return "Start creating your first note";

  return notes
    .sort(sortFunction)
    .map((note) => (
      <Note
        key={note.id}
        note={note}
        onEditNote={onEditNote}
        onSaveNote={onSaveNote}
        onClickDelete={onClickDelete}
        onClickFav={onClickFav}
        handleStatus={handleStatus}
      />
    ));
};
export default NotesList;

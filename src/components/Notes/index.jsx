import React from "react";
import useNotes from "../../hooks/useNotes";
import NotesHeader from "./Header";
import NotesList from "./List";

const Notes = () => {
  const {
    notes,
    handleDelete,
    handleSaveNote,
    handleEditNote,
    handleFavorite,
    handleStatus,
  } = useNotes();

  return (
    <>
      <NotesHeader onSaveNote={handleSaveNote} />
      <NotesList
        notes={notes}
        onSaveNote={handleSaveNote}
        onEditNote={handleEditNote}
        onClickDelete={handleDelete}
        onClickFav={handleFavorite}
        handleStatus={handleStatus}
      />
    </>
  );
};

export default Notes;

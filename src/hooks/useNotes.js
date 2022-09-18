import useLocalStorage from "./useLocalStorage";
const useNotes = () => {
  const [notes, setNotes] = useLocalStorage("notesList", []);

  const handleDelete = (noteId) => {
    if (!noteId) return;
    const filteredNotes = notes.filter((note) => note.id !== noteId);
    setNotes(filteredNotes);
  };

  const handleSaveNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleEditNote = (newNote) => {
    if (!newNote) return;
    const updateNote = notes.map((note) => {
      if (note.id !== newNote.id) return note;
      return {
        ...note,
        title: newNote.title,
        description: newNote.description,
      };
    });
    setNotes(updateNote);
  };
  const handleStatus = (noteId) => {
    if (!noteId) return;
    const updateNote = notes.map((note) => {
      if (note.id !== noteId) return note;

      return {
        ...note,
        isDone: !note.isDone,
      };
    });
    setNotes(updateNote);
  };

  const handleFavorite = (noteId) => {
    if (!noteId) return;
    const updateNote = notes.map((note) => {
      if (note.id !== noteId) return note;

      return {
        ...note,
        isPinned: !note.isPinned,
      };
    });
    setNotes(updateNote);
  };
  return {
    notes,
    setNotes,
    handleDelete,
    handleSaveNote,
    handleEditNote,
    handleFavorite,
    handleStatus,
  };
};

export default useNotes;

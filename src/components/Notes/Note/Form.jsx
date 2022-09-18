import useForm from "../../../hooks/useForm";
const NoteForm = ({ note, onSaveNote, closeModal }) => {
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
          className="nes-input"
          name="title"
          onChange={handleInputChange}
          value={title}
        />
      </div>
      <div className="nes-field">
        <label htmlFor="description">Description</label>
        <textarea
          className="nes-textarea"
          id="description"
          name="description"
          onChange={handleInputChange}
          value={description}
          rows={6}
        />
      </div>
      <button type="submit" value="submit" className="nes-btn">
        Save
      </button>
    </form>
  );
};

export default NoteForm;

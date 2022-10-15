import useNotes from "../../../../hooks/useNotes";
const NoteFavorite = ({ note }) => {
  const { handleFavorite } = useNotes();
  const { id, isPinned } = note;

  return (
    <i
      className={`nes-icon is-small star ${!isPinned ? "is-empty" : ""}`}
      onClick={() => handleFavorite(id)}
    ></i>
  );
};

export default NoteFavorite;

const NoteFavorite = ({ note, onClickFav }) => {
  const { id, isPinned } = note;
  return isPinned ? (
    <i className="nes-icon is-small star" onClick={() => onClickFav(id)}></i>
  ) : (
    <i
      className="nes-icon is-small star is-empty"
      onClick={() => onClickFav(id)}
    ></i>
  );
};

export default NoteFavorite;

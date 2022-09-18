import useReadMore from "../../hooks/useReadMore";

const ReadMore = ({ text, length }) => {
  const { isActive, onClickReadMore } = useReadMore();
  const toggleLink = () =>
    text.length >= length && (
      <>
        ...
        <a href="#" onClick={onClickReadMore}>
          {isActive ? "Read less" : "Read more"}
        </a>
      </>
    );

  return (
    <p className={isActive ? "is-active" : ""}>
      {isActive ? text : text.slice(0, length)} {toggleLink()}
    </p>
  );
};

export default ReadMore;

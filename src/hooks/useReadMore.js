import { useState, useCallback } from "react";

const useReadMore = () => {
  const [isActive, setIsActive] = useState(false);
  const onClickReadMore = useCallback((e) => {
    e.preventDefault();
    setIsActive((prevState) => !prevState);
  });

  return {
    isActive,
    setIsActive,
    onClickReadMore,
  };
};

export default useReadMore;

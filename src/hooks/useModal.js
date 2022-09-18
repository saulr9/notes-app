import { useState } from "react";

const useModal = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleModalOpen = (e) => {
    e.preventDefault();
    setIsOpened(true);
  };
  const handleModalClose = () => {
    setIsOpened(false);
  };

  return {
    isOpened,
    setIsOpened,
    handleModalOpen,
    handleModalClose,
  };
};

export default useModal;

import { useState } from "react";
import { getValueInStorage } from "../utils/localStorage";
const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(
    getValueInStorage(keyName, defaultValue)
  );

  const setValueInStorage = (value) => {
    window.localStorage.setItem(keyName, JSON.stringify(value));
    setStoredValue(value);
  };
  return [storedValue, setValueInStorage];
};
export default useLocalStorage;

export const getValueInStorage = (keyName, defaultValue) => {
  const valueInStorage = window.localStorage.getItem(keyName);
  if (valueInStorage) return JSON.parse(valueInStorage);

  window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
  return defaultValue;
};

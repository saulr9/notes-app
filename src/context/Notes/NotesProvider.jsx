import { createContext, useMemo } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useLocalStorage("notesList", []);
  const value = useMemo(() => ({ notes, setNotes }), [notes]);
  return (
    <NotesContext.Provider value={[notes, setNotes]}>
      {children}
    </NotesContext.Provider>
  );
};

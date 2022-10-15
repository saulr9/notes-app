import { useContext } from "react";
import { ThemeContext } from "./context/Notes/ThemeProvider";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { NotesProvider } from "./context/Notes/NotesProvider";
import Notes from "./components/Notes";

import "./App.css";

function App() {
  const [isDarkTheme] = useContext(ThemeContext);
  return (
    <div className="App" data-dark-theme={isDarkTheme ? "true" : "false"}>
      <Header />
      <div className="container">
        <NotesProvider>
          <Notes />
        </NotesProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;

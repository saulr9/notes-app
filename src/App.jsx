import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotesHeader from "./components/Notes/Header/";
import NotesList from "./components/Notes/List";

import "./App.css";
import Notes from "./components/Notes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Notes />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((notesItem) => (
        <Note
          key={notesItem.key}
          title={notesItem.title}
          content={notesItem.content}
        />
      ))}
      ;
      {/* <Note title="This is the note title" content="This is the note content" /> */}
      <Footer />
    </div>
  );
}

export default App;

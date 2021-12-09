import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notebook, setNotebook] = useState([{
    id: 0,
    title: "Add Note",
    content: "Yes, you can your own notes 😉"
  }

  ]);
  function createNote(notes){
    setNotebook(prevNotes => {
      return [...prevNotes, notes];
     
    });
    
  }
  function deleteNoteBook(id){
    setNotebook(prevNote => {
    return prevNote.filter((note, index) => {
        return index !== id
      })})
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={createNote} />
      { notebook.map((note, index) => {
        return( 
          <Note 
        key={index} 
        id={index} 
        title={note.title}  
        content={note.content}
        deleteNote={deleteNoteBook}
         / >
         );
      })} 
      
      <Footer />
    </div>
  );
}

export default App;

import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";
import React, {useState,useEffect} from 'react'


function App() {
  const [notes, setNote] = useState([]);
  useEffect(() => 
        setNote(JSON.parse(localStorage.getItem("MAVAR")|| [])))
  const handleAdd = (note) => {
      console.log(notes);
      setNote([...notes, note]);
  }
  return (
    <div>
      <Header />

      <CreateArea add={handleAdd}/>

      {notes && notes.map((x)=>
      <Note title={x.title} content ={x.content} />
      )}
      <Footer />
    </div>
  );
}

export default App;

import React, {useState} from 'react'
import { MdAdd } from "react-icons/md"; //Import d’une icône de la librairie matérial design
import notes from "./Note";
import setNote from "./Note";

function CreateArea (props) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [showTextarea, setShowTextarea] = useState(false);
    const [showButton, setShowButton] = useState(false);

    function handleTitleChange(event) {
        setTitle(event.target.value);
        setShowTextarea(event.target.value.trim() !== "");
      }
    
    function handleContentChange(event) {
        setContent(event.target.value);
        setShowButton(event.target.value.trim() !== "");
    }

    function submitNote(event) {
        console.log(title);
        event.preventDefault();
        props.add({ title: title, content:content });
        
    }

    return(
    <div>
        <form className="create-note" onSubmit={submitNote}>

            <input id="textArea" type="text" className="create-note textarea" placeholder="Titre" required value={title} onChange={handleTitleChange}/>
            {showTextarea && (
            <textarea name="content" className="create-note textarea" placeholder="Contenu" required value={content} onChange={handleContentChange}/>
            )}
            {showButton && (
            
            <button type="submit">
                <MdAdd />
            </button>
            )}

        </form>
    </div>
)};

export default CreateArea;

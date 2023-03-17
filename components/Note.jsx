import React, {useState,useEffect} from 'react'
import { MdDelete } from "react-icons/md";


const Note = (props) => {
    const title = props.title
    const content = props.content
    return(
    <div className ="note">
        <h1 className="h1">{props.title}</h1>
        <p className="p">{props.content}</p>
        <button className="button"><MdDelete/></button>
    </div>
    )
}
export default (Note);

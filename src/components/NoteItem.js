import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext)
  const {deleteNote} = context;
  const { note , updateNote} = props;
  return (
    <div  onClick={()=>{updateNote(note)}} className="col-md-3" >
      <div className="card my-3" style={{borderRadius:'20px'}}>
        <div className="card-body align-items-center">
          <h5 className="card-title align-items-center">{note.title}</h5>
          <p className="card-text">
            {note.description.slice(0,500)}{note.description.length>500?'...':""}
          </p>
          <i onClick={()=>{deleteNote(note._id)}} className="far fa-trash-alt mx-2"></i>
          <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;

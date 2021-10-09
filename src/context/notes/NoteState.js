import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
    const notesInitial = []

      const [notes, setNotes] = useState(notesInitial)

      // Get all notes 
      const getNotes = async (title, description, tag) =>{
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1YzIyYjcyNmFhOGI3MjdmNDY2ZDA2In0sImlhdCI6MTYzMzQyODE5Nn0.uJa7nN-pTYxk1dJZmYeZXXGMtSCmeklXNXpx9Kz8XWA'
          } 
        });
        const json = await response.json()
        console.log(json)
        setNotes(json);


      }

      // Add a note
      const addNote = async (title, description, tag) =>{
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1YzIyYjcyNmFhOGI3MjdmNDY2ZDA2In0sImlhdCI6MTYzMzQyODE5Nn0.uJa7nN-pTYxk1dJZmYeZXXGMtSCmeklXNXpx9Kz8XWA'
          },
          body: JSON.stringify({title, description, tag}) 
          
        });
        const note = await response.json()
        setNotes(notes.concat(note))
       
      }

      // Delete a note
      const deleteNote = async (id) =>{
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1YzIyYjcyNmFhOGI3MjdmNDY2ZDA2In0sImlhdCI6MTYzMzQyODE5Nn0.uJa7nN-pTYxk1dJZmYeZXXGMtSCmeklXNXpx9Kz8XWA'
          }
        });
        const json = response.json();
        console.log(json)



        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes);
      }

      // Edit a note
      const editNote = async (id, title, description, tag) =>{

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1YzIyYjcyNmFhOGI3MjdmNDY2ZDA2In0sImlhdCI6MTYzMzQyODE5Nn0.uJa7nN-pTYxk1dJZmYeZXXGMtSCmeklXNXpx9Kz8XWA'
          },
          body: JSON.stringify({title, description, tag}) 
        });
        const json = await response.json();
        console.log(json)
      


        // for (const element of notes) {
        //   if (element._id === id) {
        //     element.title = title;
        //     element.description = description;
        //     element.tag = tag;
        //   }
        // }

        
        
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if (element._id === id) {
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;
          }
        }
        setNotes(newNotes);
      }
    
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>

    )
}

// So, you can use the functions, variables and states of NoteState.js in any component by importing 'noteContext.js'

export default NoteState;
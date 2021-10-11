import React, {useEffect, useContext} from 'react'
import { useHistory } from 'react-router';
import noteContext from "../context/notes/noteContext";

const Account = () => {
    const context = useContext(noteContext);
    let history = useHistory();
    const {name, getData} = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
          getData()
        }
        else{
           history.push("/login")
        }
        // eslint-disable-next-line
      }, []);
    return (
        <div className="container">
           <h1>Account</h1>
           <h5>Name: {name}</h5>
           <h5>E-mail: {name}</h5>
           <h5>Birth Date: {name}</h5>
        </div>
    )
}

export default Account

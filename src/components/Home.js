import React from "react";
import Notes from "./Notes";

export const Home = (props) => {
  const {showAlert} = props
  return (
    <div style={{backgroundColor: '#f9f9f9'}}>
      <Notes showAlert={showAlert}/>
    </div>
  );
};

import React, { useState } from "react";
import axios from "axios";
import FormInput from "./components/FormInput";
import ButtonSubmit from "./components/ButtonSubmit";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [petID, setPetID] = useState("");
  const [petName, setPetName] = useState("");
  const [petOwner, setPetOwner] = useState("");
  const [petType, setPetType] = useState("");
  const getUsers = () => {
    axios.get("http://127.0.0.1:5000/users").then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.log("nothing");
      }
    );
    //dispatch(referenceActions.setReferences());
  };

  const petIDHandler = (e) => {
    setPetID(e.target.value);
  };
  const petNameHandler = (e) => {
    setPetName(e.target.value);
  };
  const petOwnerHandler = (e) => {
    setPetOwner(e.target.value);
  };
  const petTypeHandler = (e) => {
    setPetType(e.target.value);
  };

  return (
    <div className="App">
      <FormInput
        petIDHandler={petIDHandler}
        petNameHandler={petNameHandler}
        petOwnerHandler={petOwnerHandler}
        petTypeHandler={petTypeHandler}
      />
      <ButtonSubmit
        petID={petID}
        petName={petName}
        petOwner={petOwner}
        petType={petType}
      />
    </div>
  );
}

export default App;

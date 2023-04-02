import React, { useState } from "react";

import axios from "axios";

const CreateContact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const API_URL = "http://localhost:5000/create-contact/";

  const createContact = () => {
    return axios.post(
      API_URL,
      {
        FirstName: name,
        LastName: lastName,
      },
      console.log("Contact created ")
    );
  };

  return (
    <div>
      <h1>CreateContact</h1>
      <form>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Enter your last name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <button onClick={createContact}>Create</button>
      </form>
    </div>
  );
};

export default CreateContact;

import React, { useState, useEffect } from "react";
import axios from "axios";

const AllContacts = () => {
  const [contacts, setContacts] = useState([]);
  const records = contacts.records;

  useEffect(() => {
    axios
      .get("http://localhost:5000/contacts")
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => {
        console.log("Error from Contacts");
      });
  }, []);

  console.log(records);

  return (
    <div>
      <h1>All Contacts</h1>
      <hr />
      {records?.map((record) => (
        <div key={record.Id}>
          <p>Id: {record.Id}</p>
          <p>Name: {record.Name}</p>
          <p>LastName: {record.LastName}</p>
          <p>CreatedDate: {record.CreatedDate}</p>
          <p>Name: {record.Name}</p>
          <p>Type: {record.attributes.type}</p>
          <p>URL: {record.attributes.url}</p>
          <button>Edit</button>
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default AllContacts;

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CreateContact from "./components/CreateContact";
import EditContact from "./components/EditContact";
import ContactList from "./components/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<ContactList contacts={contacts} setContacts={setContacts} />} />
        <Route path="/create-contact" element={<CreateContact setContacts={setContacts} />} />
        <Route path="/edit-contact/:id" element={<EditContact contacts={contacts} setContacts={setContacts} />} />
      </Routes>
    </>
  );
};

export default App;

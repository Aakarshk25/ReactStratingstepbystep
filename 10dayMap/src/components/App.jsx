import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contacts) {
  return (
    <Card
      Uid={contacts.id}
      // ye hmlog ke use krne ke liya bna hai( uid )
      key={contacts.id}
      // key as atree represent krr rhe taaki vo shi way aur loop me print ho ske
      name={contacts.name}
      img={contacts.imgURL}
      tel={contacts.phone}
      email={contacts.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      // ye loop krr de rha saare contacts ko automatic
    </div>
  );
}

export default App;

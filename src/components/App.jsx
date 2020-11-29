import React from "react";
import Entry from "./Entry";
import Footer from "./Footer";
import textionary from "../textionary";

function newEntry(props) {
  return (
    <Entry
      key={props.id}
      imgURL={props.imgURL}
      name={props.name}
      description={props.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Textionary</span>
      </h1>
      <h2>
        {" "}
        Text abbreviations almost deserve their own dictionary. If you’ve ever
        caught yourself wondering, “What does btw mean in a text?” or “Is it
        appropriate to say LOL right now?” you’re not alone. Here’s a guide to
        text abbreviations commonly used in messaging nowadays.
      </h2>
      <dl className="dictionary">{textionary.map(newEntry)}</dl>
      <Footer />
    </div>
  );
}

export default App;

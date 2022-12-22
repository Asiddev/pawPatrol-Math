/* eslint-disable jsx-a11y/iframe-has-title */
import { useState } from "react";
import "./App.css";
import CharacterStrip from "./components/CharacterStrip/CharacterStrip";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import $ from "jquery";

$(document).ready(function () {
  new Audio(
    "https://ia800907.us.archive.org/19/items/tvtunes_27077/PAW%20Patrol.mp3"
  ).play();
});

function App() {
  const [characterName, setCharacterName] = useState("");
  const [question, setQuestion] = useState("");

  return (
    <div className="App">
      <Title />
      <CharacterStrip
        setCharacterName={setCharacterName}
        setQuestion={setQuestion}
      />
      <Header characterName={characterName} question={question} />
      <iframe
        hidden={true}
        allow="autoplay"
        src="https://ia800907.us.archive.org/19/items/tvtunes_27077/PAW%20Patrol.mp3"
      ></iframe>
    </div>
  );
}

export default App;

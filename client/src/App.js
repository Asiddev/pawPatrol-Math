/* eslint-disable jsx-a11y/iframe-has-title */
import { useEffect, useState } from "react";
import "./App.css";
import CharacterStrip from "./components/CharacterStrip/CharacterStrip";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import $ from "jquery";

function App() {
  const [characterName, setCharacterName] = useState("");
  const [model, setModel] = useState();
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const loadingController = function () {
    setLoading(true);
    setTimeout(() => {
      new Audio(
        "https://ia800907.us.archive.org/19/items/tvtunes_27077/PAW%20Patrol.mp3"
      ).play();
      setLoading(false);
      setModel(true);
    }, 2000);
  };

  return (
    <>
      {model ? (
        <div className="App">
          <Title />
          <Header
            characterName={characterName}
            question={question}
            answer={answer}
          />
          <CharacterStrip
            setCharacterName={setCharacterName}
            setQuestion={setQuestion}
            setAnswer={setAnswer}
          />
        </div>
      ) : (
        <>
          {loading ? (
            <div class="ring">
              Loading
              <span></span>
            </div>
          ) : (
            <div className="model">
              <h1>Welcome to Koras Paw Patrol Game!</h1>
              <h3>
                This game was created for my beautiful daughter Kora, to help
                her learn the importance of addition and subtraction with her
                favourite rescue team!
              </h3>
              <p>-Love you ❤️ </p>
              <button onClick={loadingController}>Continue</button>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;

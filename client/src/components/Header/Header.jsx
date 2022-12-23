import React, { useState } from "react";
import "./header.css";

function Header(props) {
  const [guess, setGuess] = useState(0);
  const [correct, setCorrect] = useState(false);

  const guessController = function (e) {
    e.preventDefault();

    console.log(props.answer);

    if (Number(props.answer) === Number(guess)) {
      setCorrect(true);
      setTimeout(() => {
        setCorrect(false);
      }, 3000);
    } else {
      console.log("wrong");
    }
  };

  return (
    <>
      <div className="flex">
        {props.characterName ? (
          <>
            {correct ? (
              <div>
                <h1>You got it right! Good Job Kora!</h1>
              </div>
            ) : (
              <div className="header">
                <form className="form" onSubmit={guessController}>
                  <h1>{props.question + "?"}</h1>
                  <input
                    type="number"
                    placeholder="guess here"
                    onChange={(e) => setGuess(e.target.value)}
                  />
                  <div className="submit">
                    <button disabled={correct} className="cta" type="submit">
                      Lets Do It!
                    </button>
                  </div>
                </form>
              </div>
            )}
          </>
        ) : null}
        <div className="right">
          <img
            className={props.characterName ? "speaker " : "hidden"}
            src="https://media2.giphy.com/media/DbGKg8qOmGosQUjskR/giphy.gif"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Header;

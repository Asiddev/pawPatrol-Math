import React, { useState } from "react";
import "./header.css";

function Header(props) {
  const [guess, setGuess] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [error, setError] = useState("");

  const guessController = function (e) {
    e.preventDefault();

    console.log(props.answer);

    if (Number(props.answer) === Number(guess)) {
      setCorrect(true);
      setTimeout(() => {
        setError("Try again!");
        setCorrect(false);
        setGuess(0);
      }, 3000);
    } else {
      setError("Try again!");
    }

    setTimeout(() => {
      setError("");
    }, 3000);
  };

  return (
    <>
      <div className="center">
        {error && (
          <div class="alert alert-danger center" role="alert">
            You were so close Kora! Lets give it another try!
          </div>
        )}
      </div>
      <div className="flex">
        {props.characterName ? (
          <>
            {correct ? (
              <div className="center">
                <div class="alert alert-success center" role="alert">
                  ✅ WOO HOO! You got it! Good job Kora ✅
                </div>
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

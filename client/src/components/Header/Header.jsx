import React from "react";
import "./header.css";

function Header(props) {
  return (
    <>
      <div className="flex">
        {props.characterName ? (
          <div className="header">
            <form>
              <h1>{props.question + "?"}</h1>
              <input class="inputname" type="number" placeholder="" />
              <button type="submit" />
            </form>
          </div>
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

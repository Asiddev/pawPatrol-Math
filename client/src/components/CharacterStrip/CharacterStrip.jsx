import React from "react";
import "./characterStrip.css";

let characters = [
  {
    name: "Sky",
    imagePath: "https://i.imgur.com/IL67j9T.png",
  },
  {
    name: "Chase",
    imagePath: "https://i.imgur.com/hQP3MgO.png",
  },
  {
    name: "Rubble",
    imagePath: "https://i.imgur.com/H8cvTx6.png",
  },
  {
    name: "Arkis",
    imagePath: "https://i.imgur.com/LziZLMS.png",
  },
  {
    name: "Marshall",
    imagePath: "https://i.imgur.com/iFrBNfv.png",
  },
  {
    name: "Zuma",
    imagePath: "https://i.imgur.com/yTChKMa.png",
  },
];
let operators = ["+", "-"];

function CharacterStrip(props) {
  const pickCharacter = function (event) {
    console.log("hello");
    console.log(event.target.value);
    props.setCharacterName(event.target.value);
    // alert(`You chose ${event.target.value}`);

    generateQuestion();
    return;
  };

  const generateQuestion = function () {
    let random1 = Math.floor(Math.random() * 10);
    let random2 = Math.floor(Math.random() * 10);
    const getRandomInt = (max, min = 0) => {
      min = Math.ceil(min);
      max = Math.floor(1);

      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let randomOperator = operators[getRandomInt()];

    console.log(randomOperator);

    const question = `What is ${random1} ${randomOperator}  ${random2}`;
    props.setQuestion(question);
  };

  const characterList = characters.map((character, index) => {
    return (
      <div key={index} className="character-container">
        <button value={character.name} onClick={pickCharacter}>
          {character.name}
        </button>
        <img src={character.imagePath} alt="" />
      </div>
    );
  });

  return (
    <>
      <h1>Who should we ask a math question?</h1>
      <div>{characterList}</div>
    </>
  );
}

export default CharacterStrip;

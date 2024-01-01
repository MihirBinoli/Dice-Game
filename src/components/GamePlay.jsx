import React from "react";
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import { useState } from "react";
import {Button, OutlineButton} from "../styled/Button"; 
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    //removing it from here because it is not being removed at the time of number selection
    // setError("");
    //after writing this code we use it so remember to pass it as a pop below

    //doing this will disable the randomnumber and dice both

    const randomNumber = generateRandomNumber(1, 7);

    //setting the number
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  }


  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      {/* making setCurrentDice to rolldice since it has been moved to gameplay itself */}
      {/* <RollDice currentDice={currentDice} setCurrentDice={setCurrentDice}/> */}
      <RollDice currentDice={currentDice} rollDice={rollDice} />

      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        {/* toggle function on button  */}
        <Button onClick={() => setShowRules((prev) => !prev )}>{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {/* <Rules /> */}
      {showRules && <Rules />}

    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

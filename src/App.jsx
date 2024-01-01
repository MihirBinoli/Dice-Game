// import styled from "styled-components";
import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/Gameplay";

function App() {
  //manage the state using hooks
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {/* <Button>Hell0</Button> */}
      {/* <StartGame /> */}

      {/* passing toggle as a prop  */}
    
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </>
  );
}

export default App;

// const Button = styled.button`
//   background-color: black;
//   color: white;
//   padding: 10px,10px;
// `;


import styled from "styled-components";

const RollDice = ({rollDice, currentDice}) => {

  //move this state to gameplay

  // const [currentDice, setCurrentDice] = useState(1);
 
  //move this also to gameplay
  
  // const generateRandomNumber = (min, max) => {
  //   console.log(Math.floor( Math.random() * (max - min) + min));
  //   return Math.floor( Math.random() * (max - min) + min);
  // }

  // const rollDice = () => {
  //   const randomNumber = generateRandomNumber(1, 7);

  //   //setting the number
  //   setCurrentDice((prev) => randomNumber);
  // }
  

  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        {/* <img src="/images/dice/dice_1.png" alt="dice 1" /> */}
        {/* done to run the js in photo*/}
        <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on the Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice{
    cursor: pointer;
  }

  p{
    font-size: 24px;
  }
`;

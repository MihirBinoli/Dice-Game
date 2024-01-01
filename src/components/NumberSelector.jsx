import styled from "styled-components";

//after putting in the comp of number state we come here and put error here and then add it below
const NumberSelector = ({setError, error, selectedNumber, setSelectedNumber }) => {    //there is no select no and set number in this so we will pass as props
  //declaring an array
  const arrNumber = [1, 2, 3, 4, 5, 6];
  //state to select the number

  //cutting this state and placing in the parent of no selector
  // const [selectedNumber, setSelectedNumber] = useState();
  //   console.log(selectedNumber);

const numberSelectorHandler = (value) => {
  setSelectedNumber(value);
  setError("");
}

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {/* to run javascript we put the {} */}

        {arrNumber.map((value, i) => (
          // we have to give a key so that the react traces it to render , the key is unique
          // <Box key={i}>{value}</Box>       <Box key={i} onClick={setSelectedNumber(value)}> -- error, use callback to access anything in a fn
          //passing an anonymous function through which we will pass this value

          //pass a check if the selected no is same or not -- we will pass the props to the components
          <Box
            isSelected={value === selectedNumber}
            key={i}
            // onClick={() => setSelectedNumber(value)}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}

        {/* <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box> */}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;
    }
    .error{
      color: red;
    }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;

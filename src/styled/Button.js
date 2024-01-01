import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background: #000000;
  padding: 10px 10px;
  min-width: 220px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  //to disable the shifting of the content on clicking on the button
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;
  
  //using pseudo
  &:hover{
      background-color: white;
      border: 1px solid black;
      color: black;
      transition: 0.3s background ease-in;
    }

`;
export const OutlineButton = styled(Button)`
  //now overriding it
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover{
      background-color: black;
      border: 1px solid black;
      color: white;
    }
`;
import styled from "styled-components";
import theme from "../theme";

export const StyledButton = styled.button`
  border: 2px solid;
  background-color: ${theme.primary};
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

export const Dngr = styled.button`
  font-family: "Rubik", sans-serif;
  border: 2px solid;
  background-color: ${theme.warning};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: aqua;
    color: beige;
  }
`;

export const Primary = styled.button`
  border: 2px solid;
  background-color: ${theme.primary};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

export const Secondary = styled.button`
  border: 2px solid ${theme.white};
  width: 100;
  background-color: ${theme.white};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

export const Success = styled.button`
  border: 2px solid;
  background-color: ${theme.success};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

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

export const PrimaryOutl = styled.button`
  border: 2px solid ${theme.primary};
  width: 100;
  background-color: ${theme.white};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: ${theme.primary};
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: ${theme.primary};
    color: ${theme.white};
  }
`;

export const SecondaryOutl = styled.button`
  border: 2px solid black;
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
  &:hover,
  &:active {
    background-color: ${theme.secondary};
    color: black;
  }
`;
export const SuccessOutl = styled.button`
  border: 2px solid;
  width: 100;
  background-color: ${theme.white};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: ${theme.success};
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: ${theme.success};
    color: black;
  }
`;

export const DngrOutl = styled.button`
  border: 2px solid;
  width: 100;
  background-color: ${theme.white};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: ${theme.warning};
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: ${theme.warning};
    color: black;
  }
`;

export const Icnoutline = styled.button`
  border: 2px solid; // Add a unit (e.g., pixels)
  background-color: ${theme.white};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: ${theme.primary};
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: ${theme.primary};
    color: ${theme.white};
  }
`;

export const Icnfullline = styled.button`
  border: 2px solid ${theme.primary}; // Add a unit (e.g., pixels)
  background-color: ${theme.primary};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: ${theme.primary};
    color: black;
  }
`;

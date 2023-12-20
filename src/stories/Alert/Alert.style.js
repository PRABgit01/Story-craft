import styled, { css } from "styled-components";
import theme from "../theme";

export const AlertStyles = styled.button`
  width: 100%;
  border-radius: 2%;
  text-align: left;
  border: 1px solid;
  padding: 10px 20px;
  font-family: "Rubik", sans-serif;
  gap: 1rem;
  ${({ colorinput, isOutline, border }) => css`
    background-color: ${isOutline ? "transparent" : theme?.[colorinput]};
    color: ${isOutline ? theme?.[colorinput] : theme.white};
    border-color: ${border ? "transparent" : theme?.[colorinput]};
  `}

  font-size: 1.2rem;
  font-weight: 600;
  ${({ colorinput, isOutline, border }) => css`
    background-color: ${isOutline ? "transparent" : theme?.[colorinput]};
    color: ${isOutline ? theme?.[colorinput] : theme.white};
    border-color: ${border ? "transparent" : theme?.[colorinput]};
  `}
  cursor: pointer;
`;

export const AlertContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

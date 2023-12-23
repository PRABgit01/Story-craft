import styled, { css } from "styled-components";
import theme from "../theme";

export const AlertStyles = styled.button`
  width: 100%;
  border-radius: 3px;
  font-family: sans-serif;
  text-align: left;
  border: 1px solid ${theme.white};
  padding: 10px 20px;
  font-family: "Rubik", sans-serif;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  color: ${({ type }) =>
    type === "secondary" ? theme?.[type] : theme.white};

  background-color: ${({ type }) =>
    type === "secondary" ? theme.white : theme?.[type]};
`;

export const OutlineAlertStyle=styled(AlertStyles)`
  background-color: transparent;
  border: 1px solid ${({type})=>theme?.[type]};
  color: ${({type})=>theme?.[type]};


`
export const AlertContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

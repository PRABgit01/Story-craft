import styled, { css } from "styled-components";
import theme from "../theme";

export const StyledButtonComponent = styled.button`
  text-transform: uppercase;
  border: 2px solid ${theme.white};

  font-size: 1rem;
  font-weight: 600;
  background-color: ${({ colorInput }) =>
    colorInput === "secondary" ? theme.white : theme?.[colorInput]};

  color: ${({ colorInput }) =>
    colorInput === "secondary" ? theme?.[colorInput] : theme.white};

  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;

export const OutlineButton = styled(StyledButtonComponent)`
  border: 2px solid ${({ colorInput }) => theme?.[colorInput]};
  background-color: ${theme.white};
  color: ${({ colorInput }) => theme?.[colorInput]};
  &:hover,
  &:active {
    background-color: ${({ colorInput }) => theme?.[colorInput]};
    color: ${theme.white};
  }
`;
export const ButtonText = styled(StyledButtonComponent)`
  color: ${({ colorInput }) => theme?.[colorInput]};
  border: 2px solid transparent;
  background-color: transparent;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
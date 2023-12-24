import styled from "styled-components";
import theme from "../theme";

export const LabelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const LabelText = styled.p`
  text-align: left;
  font-family: sans-serif;
`;

export const PasswordText = styled(LabelText)`
  color: ${theme.dangerHover};
`;
export const LabelInput = styled.input`
  border: 1px solid;
  font-size: 1.8rem;
  transition: 0.4s all ease;
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  width: 150%;
`;

export const PasswordInput=styled(LabelInput)`
  border: 1px solid ${theme.dangerHover};
`

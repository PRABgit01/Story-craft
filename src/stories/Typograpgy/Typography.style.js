import styled, { css } from "styled-components";
import theme from "../theme";

export const TextType = styled.div`
    color:${({type})=> theme?.[type]};
    line-height: 1.05em;
     
  ${({ as }) => css`
    line-height: 1.5;
    font-weight: 600;
    font-family: "Rubik", sans-serif; 
  `};   

  ${({ fontSize }) => css`
    font-size: ${fontSize}rem;
  `};
`;

export const TextContainer=styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
`

import styled,{css} from "styled-components";

export const AvtarConatiner=styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px; 
  justify-content: center;  
  align-items: center;
`
export const ImageCustom=styled.img`
 ${({ size }) => css`
 height: ${size}rem;
  `};

  ${({ shape }) => css`
    border-radius: ${shape === "circle" ? "50%" : "20%"};
  `};
`
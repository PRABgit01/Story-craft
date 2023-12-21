import styled,{css} from "styled-components";

export const AvtarConatiner=styled.div`
display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`
export const frameContainer=styled.div`
  position: relative;
`

export const BadgeIcon=styled.div`
   position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  background-color: #ff0000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  
`

export const ImageCustom=styled.img`
${({ size }) => css`
    height: ${size}rem;
    border-radius: 50%;
  `}

`
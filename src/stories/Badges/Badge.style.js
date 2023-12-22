import styled, { css } from "styled-components";
import theme from "../theme";

export const BadgesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const AvatarImage = styled.img`
  ${({ size }) => css`
    height: ${size}rem;
    border-radius: 50%;
  `}
`;

export const BadgeIcon = styled.div`
  position: absolute;
  left: 48%;
  top: 76%;
  transform: translateX(45%);
  width: 10px;
  height: 10px;
  border: 2px solid;
  background-color: ${({ colorInput }) => theme?.[colorInput]};
  border-color: ${theme.white};
  border-radius: 50%;
  display: inline-block;
`;

export const BadgeForIcon = styled(BadgeIcon)`
  background-color: ${({ colorInput }) => theme?.[colorInput]};
  left: 62%;
  top: 7%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  color: white;
  font-size: 12px;
  text-align: center;
`;

export const IconImageBadge=styled(AvatarImage)`
   ${({ size }) => css`
    height: ${size}rem;
    
  `}
  border-radius: 0%;
`

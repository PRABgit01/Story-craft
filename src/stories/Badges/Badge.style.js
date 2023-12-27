import styled, { css } from "styled-components";
import theme from "../theme";

const sizes = {
  small: { height: 2.4, top: 41, left: 17, topIcon: 9, leftIcon: 44 },
  medium: { height: 3.4, top: 53, left: 42, topIcon: 8, leftIcon: 59 },
  large: { height: 4.4, top: 63, left: 49, topIcon: 8, leftIcon: 69 },
};

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
  ${({ type }) => css`
    height: ${sizes[type]?.height}rem;
  `}
  border-radius:50%;
`;

export const BadgeIcon = styled.div`
  position: absolute;
  ${({ type }) => css`
    top: ${sizes[type]?.top}%;
    left: ${sizes[type]?.left}%;
  `}
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
  ${({ type }) => css`
    top: ${sizes[type]?.topIcon}%;
    left: ${sizes[type]?.leftIcon}%;
  `}
  width: 15px;
  height: 15px;
  border-radius: 50%;
  color: white;
  font-size: 12px;
  text-align: center;
`;

export const IconImageBadge = styled(AvatarImage)`
  ${({ size }) => css`
    height: ${size}rem;
    border-radius: 0%;
  `}
`;

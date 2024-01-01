import styled, { css } from "styled-components";
import theme from "../theme";
import sizes from "./sizes";

export const StyledBadgesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

export const StyledImageContainer = styled.div`
  position: relative;
`;

export const StyledAvatarImage = styled.img`
  ${({ type }) => css`
    height: ${sizes[type]?.height}rem;
  `}
  border-radius:50%;
`;

export const StyledBadgeIcon = styled.div`
  position: absolute;
  ${({ type }) => css`
    top: ${sizes[type]?.top}%;
    left: ${sizes[type]?.left}%;
  `}
  transform: translateX(45%);
  width: 10px;
  height: 10px;
  border: 2px solid ${theme.white};
  background-color: ${({ color }) => theme?.[color]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBadgeForIcon = styled(StyledBadgeIcon)`
  background-color: ${({ color }) => theme?.[color]};
  ${({ type }) => css`
    top: ${sizes[type]?.topIcon}%;
    left: ${sizes[type]?.leftIcon}%;
  `}
  width: 16px;
  height: 16px;
  border-radius: 50%;
  color: ${theme.white};
  font-size: 10px;
  text-align: center;
`;

export const StyledIconImageBadge = styled(StyledAvatarImage)`
  ${({ size }) => css`
    height: ${size}rem;
  `}
`;

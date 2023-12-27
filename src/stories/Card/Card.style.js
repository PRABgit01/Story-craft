import styled from "styled-components";
import theme from "../theme";

export const CardContainer = styled.div`
  /* background-color: pink; */
  display: flex;
  justify-content: center;
  padding: 5%;
`;
export const CardBox = styled.div`
  display: flex;
  flex-flow: column;
  height: max-content;
  max-width: 19rem;
  background-color: ${theme.white};
  border-radius: 5px;
  padding: 7px;
  transition: 300ms ease;
  &:hover,
  &:active {
    box-shadow: 5px 4px 8px rgba(3, 0, 0, 0.1);
  }
`;

export const CardTitle = styled.h3`
  font-family: sans-serif;
  color: ${theme.primary};
  padding-bottom: 2px;
`;

export const CardPara = styled.p`
  font-family: sans-serif;
  color: ${theme.secondary};
`;
export const CardBadge = styled.img`
  border-radius: 5px;
  width: 100%;
`;
export const BadgeText = styled.div`
  position: absolute;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  top: 87px;
  left: 366px;
  background-color: ${theme.primary};
  padding: 2px;
  color: ${theme.white};
`;

export const DissMissBadge = styled(BadgeText)`
  top: 95px;
  left: 630px;
  padding: 0.5rem 0.7rem;
  font-weight: 600;
  &:hover,
  &:active {
    box-shadow: 5px 4px 8px rgba(3, 0, 0, 0.1);
  }
`;

export const MiddleText = styled(BadgeText)`
  top: 160px;
  left: 470px;
  padding: 0.5rem 0.7rem;
  font-weight: 600;
  background-color: transparent;
  font-size: 1rem;
`;
export const OutlineButton = styled.button`
  border: 1px solid ${theme.primary};
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  background-color: transparent;
  color: ${theme.primary};
  border-radius: 2px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: ${theme.primary};
    color: ${theme.white};
  }
`;

export const SmallImage = styled(CardBadge)`
  width: 15%;
  height: 25%;
  padding-top: 2.1%;
`;

export const HorizontalCard = styled.div`
  display: flex;
  gap: 0.3rem;
  flex-flow: row;
  height: max-content;
  max-width: 45rem;
  background-color: ${theme.white};
  border-radius: 5px;
  padding: 0.5rem;
  transition: 500ms;
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
`;

